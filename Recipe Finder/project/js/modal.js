// Modal handling
function initializeModals() {
    const modals = {
        add: document.getElementById('addRecipeModal'),
        help: document.getElementById('helpModal'),
        detail: document.getElementById('recipeDetailModal')
    };

    const buttons = {
        add: document.getElementById('addRecipeBtn'),
        help: document.getElementById('helpBtn')
    };

    // Close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            for (let modal of Object.values(modals)) {
                modal.style.display = 'none';
            }
        });
    });

    // Open modals
    buttons.add.addEventListener('click', () => modals.add.style.display = 'block');
    buttons.help.addEventListener('click', () => modals.help.style.display = 'block');

    // Close when clicking outside
    window.addEventListener('click', (event) => {
        for (let modal of Object.values(modals)) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    });

    // Cancel button in add recipe form
    document.getElementById('cancelAddRecipe').addEventListener('click', () => {
        modals.add.style.display = 'none';
    });

    return modals;
}

// Initialize ingredient handling in add recipe form
function initializeIngredientHandling() {
    const ingredientsList = document.getElementById('ingredientsList');
    const addIngredientBtn = document.getElementById('addIngredientBtn');

    function createIngredientInput() {
        const div = document.createElement('div');
        div.className = 'ingredient-input';
        div.innerHTML = `
            <input type="text" class="ingredient" placeholder="e.g., 2 cups flour" required>
            <button type="button" class="remove-ingredient">✕</button>
        `;

        div.querySelector('.remove-ingredient').addEventListener('click', () => {
            if (ingredientsList.children.length > 1) {
                div.remove();
            }
        });

        return div;
    }

    addIngredientBtn.addEventListener('click', () => {
        ingredientsList.appendChild(createIngredientInput());
    });
}

// Export functions to make them available globally
window.initializeModals = initializeModals;
window.initializeIngredientHandling = initializeIngredientHandling;