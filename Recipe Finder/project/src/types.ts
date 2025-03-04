export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  mealType: string;
  cookingTime: number;
  servings: number;
  ingredients: string[];
  instructions: string;
  image: string;
}