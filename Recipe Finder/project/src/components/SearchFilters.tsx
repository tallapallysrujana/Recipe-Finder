import React from 'react';

interface SearchFiltersProps {
  selectedCuisine: string;
  setSelectedCuisine: (cuisine: string) => void;
  selectedMealType: string;
  setSelectedMealType: (mealType: string) => void;
}

const SearchFilters = ({
  selectedCuisine,
  setSelectedCuisine,
  selectedMealType,
  setSelectedMealType
}: SearchFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cuisine
        </label>
        <select
          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="all">All Cuisines</option>
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
          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
          value={selectedMealType}
          onChange={(e) => setSelectedMealType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;