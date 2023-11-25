import {
  BreadType,
  CheezeType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';

export class ClassicPizzaFactory {
  bakePizza(stype: PizzaStyle, size: PizzaSize) {
    const pizza = new Pizza();
    pizza.type = PizzaType.Classic;
    pizza.size = size;

    if (stype === PizzaStyle.Italian) {
      pizza.bread = BreadType.Thin;
    } else {
      pizza.bread = BreadType.Thick;
    }

    pizza.cheese = CheezeType.Mozzarella;
    pizza.ingredients = [Ingredient.Tomato, Ingredient.Basil];

    return pizza;
  }
}
