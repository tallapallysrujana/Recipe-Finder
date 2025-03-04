import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Recipe } from '../types';

interface AddRecipeFormProps {
  onAdd: (recipe: Recipe) => void;
  onClose: () => void;
}

const AddRecipeForm = ({ onAdd, onClose }: AddRecipeFormProps) => {
  const [recipe, setRecipe] = useState<Omit<Recipe, 'id'>>({
    name: '',
    cuisine: '',
    mealType: '',
    cookingTime: 0,
    servings: 1,
    ingredients: [''],
    instructions: '',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(recipe as Recipe);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const removeIngredient = (index: number) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Add New Recipe</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={recipe.name}
                onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cuisine
                </label>
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={recipe.cuisine}
                  onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}
                >
                  <option value="">Select cuisine</option>
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                  <option value="American">American</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meal Type
                </label>
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={recipe.mealType}
                  onChange={(e) => setRecipe({ ...recipe, mealType: e.target.value })}
                >
                  <option value="">Select meal type</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Snack">Snack</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cooking Time (minutes)
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={recipe.cookingTime}
                  onChange={(e) => setRecipe({ ...recipe, cookingTime: parseInt(e.target.value) })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Servings
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={recipe.servings}
                  onChange={(e) => setRecipe({ ...recipe, servings: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ingredients
              </label>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    required
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    placeholder="e.g., 2 cups flour"
                  />
                  {recipe.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="px-3 py-2 text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="text-sm text-orange-500 hover:text-orange-600"
              >
                + Add another ingredient
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructions
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={recipe.instructions}
                onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
                placeholder="Enter step-by-step instructions..."
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;