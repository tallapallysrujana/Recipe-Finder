// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const recipeGrid = document.getElementById('recipeGrid');
    const modals = initializeModals();
    const filterRecipes = initializeSearch();
    initializeIngredientHandling();

    // Display recipes function
    window.displayRecipes = function(recipesToShow) {
        recipeGrid.innerHTML = '';
        if (recipesToShow.length === 0) {
            recipeGrid.innerHTML = `
                <div class="no-results">
                    <p>No recipes found. Try adjusting your search or filters.</p>
                </div>
            `;
            return;
        }
        recipesToShow.forEach(recipe => {
            recipeGrid.appendChild(createRecipeCard(recipe));
        });
    };

    // Add recipe form handling
    const addRecipeForm = document.getElementById('addRecipeForm');
    addRecipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newRecipe = {
            id: Date.now(),
            name: document.getElementById('recipeName').value,
            cuisine: document.getElementById('recipeCuisine').value,
            mealType: document.getElementById('recipeMealType').value,
            cookingTime: parseInt(document.getElementById('cookingTime').value),
            servings: parseInt(document.getElementById('servings').value),
            ingredients: Array.from(document.querySelectorAll('.ingredient')).map(input => input.value),
            instructions: document.getElementById('instructions').value,
            image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        };

        recipes.push(newRecipe);
        modals.add.style.display = 'none';
        addRecipeForm.reset();
        filterRecipes();
    });

    // Initial display
    displayRecipes(recipes);
});