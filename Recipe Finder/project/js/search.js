// Search and filter functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const cuisineFilter = document.getElementById('cuisineFilter');
    const mealTypeFilter = document.getElementById('mealTypeFilter');
    
    let currentFilters = {
        search: '',
        cuisine: 'all',
        mealType: 'all'
    };

    function filterRecipes() {
        const filtered = recipes.filter(recipe => {
            const matchesSearch = recipe.name.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(currentFilters.search.toLowerCase()));
            const matchesCuisine = currentFilters.cuisine === 'all' || recipe.cuisine === currentFilters.cuisine;
            const matchesMealType = currentFilters.mealType === 'all' || recipe.mealType === currentFilters.mealType;
            
            return matchesSearch && matchesCuisine && matchesMealType;
        });

        displayRecipes(filtered);
    }

    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        filterRecipes();
    });

    cuisineFilter.addEventListener('change', (e) => {
        currentFilters.cuisine = e.target.value;
        filterRecipes();
    });

    mealTypeFilter.addEventListener('change', (e) => {
        currentFilters.mealType = e.target.value;
        filterRecipes();
    });

    return filterRecipes;
}