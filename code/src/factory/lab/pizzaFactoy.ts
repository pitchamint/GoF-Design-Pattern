import { PizzaSize, PizzaStyle } from './pizza';

export interface PizzaFactory {
  bakePizza(style: PizzaStyle, size: PizzaSize): string;
}
