import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
              <span className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded">
                {recipe.cuisine}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {recipe.cookingTime} mins
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {recipe.servings} servings
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-1">Ingredients:</h4>
              <div className="flex flex-wrap gap-1">
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-orange-100 text-orange-700 rounded"
                  >
                    {ingredient}
                  </span>
                ))}
                {recipe.ingredients.length > 3 && (
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded">
                    +{recipe.ingredients.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;