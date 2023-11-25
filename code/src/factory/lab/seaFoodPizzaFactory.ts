import {
  BreadType,
  CheezeType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';

export class SeaFoodPizzaFactory {
  bakePizza(style: PizzaStyle, size: PizzaSize) {
    const pizza = new Pizza();
    pizza.type = PizzaType.Seafood;
    pizza.size = size;
    if (style === PizzaStyle.Italian) {
      pizza.bread = BreadType.Thin;
    } else {
      pizza.bread = BreadType.Thick;
    }
    pizza.cheese = CheezeType.Mozzarella;
    pizza.ingredients = [
      Ingredient.Tomato,
      Ingredient.Onion,
      Ingredient.Shrimp,
      Ingredient.Tuna,
    ];
    return pizza;
  }
}
