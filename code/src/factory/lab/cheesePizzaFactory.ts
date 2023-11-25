import {
  BreadType,
  CheezeType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
} from './pizza';

export class CheesePizzaFactory {
  bakePizza(style: PizzaStyle, size: PizzaSize) {
    const pizza = new Pizza();
    pizza.size = size;
    pizza.bread = BreadType.Thick;
    pizza.cheese = CheezeType.Parmesan;

    if (style === PizzaStyle.Italian) {
      pizza.ingredients = [
        Ingredient.Basil,
        Ingredient.Olive,
        Ingredient.Onion,
      ];
    } else {
      pizza.ingredients = [
        Ingredient.Tomato,
        Ingredient.Basil,
        Ingredient.Olive,
        Ingredient.Onion,
      ];
    }
    return pizza;
  }
}
