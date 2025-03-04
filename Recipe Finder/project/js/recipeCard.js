// Create recipe card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-content">
            <div class="recipe-header">
                <h3 class="recipe-title">${recipe.name}</h3>
                <span class="recipe-cuisine">${recipe.cuisine}</span>
            </div>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.cookingTime} mins</span>
                <span>👥 ${recipe.servings} servings</span>
            </div>
            <div class="recipe-ingredients">
                ${recipe.ingredients.slice(0, 3).map(ing => 
                    `<span class="ingredient-tag">${ing}</span>`
                ).join('')}
                ${recipe.ingredients.length > 3 ? 
                    `<span class="ingredient-tag">+${recipe.ingredients.length - 3} more</span>` : 
                    ''}
            </div>
        </div>
    `;

    card.addEventListener('click', () => showRecipeDetail(recipe));
    return card;
}

// Show recipe detail
function showRecipeDetail(recipe) {
    const modal = document.getElementById('recipeDetailModal');
    const detailName = document.getElementById('detailRecipeName');
    const detailContent = document.getElementById('recipeDetail');

    detailName.textContent = recipe.name;
    detailContent.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
        <div class="recipe-detail-meta">
            <span>⏱️ ${recipe.cookingTime} minutes</span>
            <span>👥 ${recipe.servings} servings</span>
            <span>🍽️ ${recipe.mealType}</span>
            <span>🌍 ${recipe.cuisine}</span>
        </div>
        
        <div class="recipe-detail-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-detail-section">
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.split('\n').map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    modal.style.display = 'block';
}