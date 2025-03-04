import React, { useState } from 'react';
import { Search, PlusCircle, HelpCircle, Coffee, UtensilsCrossed } from 'lucide-react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchFilters from './components/SearchFilters';
import HelpModal from './components/HelpModal';
import { Recipe } from './types';
import { sampleRecipes } from './data/sampleRecipes';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedMealType, setSelectedMealType] = useState<string>('all');

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now().toString() }]);
    setShowAddForm(false);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCuisine = selectedCuisine === 'all' || recipe.cuisine === selectedCuisine;
    const matchesMealType = selectedMealType === 'all' || recipe.mealType === selectedMealType;
    
    return matchesSearch && matchesCuisine && matchesMealType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes or ingredients..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          <div className="flex gap-4 ml-4">
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              Add Recipe
            </button>
            <button
              onClick={() => setShowHelp(true)}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              Help
            </button>
          </div>
        </div>

        <SearchFilters
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          selectedMealType={selectedMealType}
          setSelectedMealType={setSelectedMealType}
        />

        {filteredRecipes.length > 0 ? (
          <RecipeList recipes={filteredRecipes} />
        ) : (
          <div className="text-center py-12">
            <UtensilsCrossed className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No recipes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {showAddForm && (
        <AddRecipeForm onAdd={handleAddRecipe} onClose={() => setShowAddForm(false)} />
      )}

      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}

export default App;