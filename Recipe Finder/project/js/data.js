const recipes = [
    {
        id: 1,
        name: "Classic Margherita Pizza",
        cuisine: "Italian",
        mealType: "Dinner",
        cookingTime: 30,
        servings: 4,
        ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt"],
        instructions: "1. Preheat oven to 500°F\n2. Roll out pizza dough\n3. Add tomato sauce\n4. Top with mozzarella\n5. Bake for 12-15 minutes\n6. Add fresh basil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        cuisine: "Indian",
        mealType: "Dinner",
        cookingTime: 45,
        servings: 6,
        ingredients: ["Chicken breast", "Yogurt", "Tomato sauce", "Heavy cream", "Garam masala", "Onion", "Garlic", "Ginger"],
        instructions: "1. Marinate chicken in yogurt and spices\n2. Grill chicken until charred\n3. Make sauce with tomatoes and cream\n4. Combine chicken and sauce",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Sushi Rolls",
        cuisine: "Japanese",
        mealType: "Lunch",
        cookingTime: 40,
        servings: 4,
        ingredients: ["Sushi rice", "Nori sheets", "Fresh fish", "Cucumber", "Avocado", "Rice vinegar", "Wasabi", "Soy sauce"],
        instructions: "1. Cook sushi rice\n2. Prepare fillings\n3. Roll with nori sheets\n4. Cut into pieces",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Greek Salad",
        cuisine: "Mediterranean",
        mealType: "Lunch",
        cookingTime: 15,
        servings: 4,
        ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Kalamata olives", "Olive oil", "Oregano"],
        instructions: "1. Chop vegetables\n2. Combine in bowl\n3. Add feta and olives\n4. Dress with olive oil and oregano",
        image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Pad Thai",
        cuisine: "Thai",
        mealType: "Dinner",
        cookingTime: 30,
        servings: 4,
        ingredients: ["Rice noodles", "Shrimp", "Tofu", "Bean sprouts", "Peanuts", "Tamarind paste", "Fish sauce", "Palm sugar"],
        instructions: "1. Soak noodles\n2. Stir-fry ingredients\n3. Add sauce\n4. Toss with noodles",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Chocolate Chip Cookies",
        cuisine: "American",
        mealType: "Dessert",
        cookingTime: 25,
        servings: 24,
        ingredients: ["Flour", "Butter", "Brown sugar", "White sugar", "Eggs", "Vanilla extract", "Chocolate chips"],
        instructions: "1. Cream butter and sugars\n2. Add eggs and vanilla\n3. Mix in dry ingredients\n4. Bake at 375°F",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Beef Tacos",
        cuisine: "Mexican",
        mealType: "Dinner",
        cookingTime: 30,
        servings: 6,
        ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Lettuce", "Tomatoes", "Cheese", "Sour cream"],
        instructions: "1. Brown beef\n2. Add seasoning\n3. Warm tortillas\n4. Assemble tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Kung Pao Chicken",
        cuisine: "Chinese",
        mealType: "Dinner",
        cookingTime: 35,
        servings: 4,
        ingredients: ["Chicken thighs", "Peanuts", "Bell peppers", "Dried chilies", "Soy sauce", "Rice vinegar", "Cornstarch"],
        instructions: "1. Marinate chicken\n2. Stir-fry vegetables\n3. Cook chicken\n4. Combine with sauce",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Breakfast Burrito",
        cuisine: "Mexican",
        mealType: "Breakfast",
        cookingTime: 20,
        servings: 2,
        ingredients: ["Eggs", "Tortillas", "Black beans", "Cheese", "Salsa", "Avocado", "Hot sauce"],
        instructions: "1. Scramble eggs\n2. Warm tortillas\n3. Layer ingredients\n4. Roll burritos",
        image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Caprese Salad",
        cuisine: "Italian",
        mealType: "Lunch",
        cookingTime: 10,
        servings: 4,
        ingredients: ["Fresh mozzarella", "Tomatoes", "Fresh basil", "Balsamic vinegar", "Olive oil", "Salt", "Pepper"],
        instructions: "1. Slice mozzarella and tomatoes\n2. Arrange on plate\n3. Add basil leaves\n4. Drizzle with dressing",
        image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Miso Soup",
        cuisine: "Japanese",
        mealType: "Lunch",
        cookingTime: 15,
        servings: 4,
        ingredients: ["Dashi stock", "Miso paste", "Tofu", "Wakame seaweed", "Green onions"],
        instructions: "1. Heat dashi stock\n2. Dissolve miso paste\n3. Add tofu and seaweed\n4. Garnish with green onions",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Apple Pie",
        cuisine: "American",
        mealType: "Dessert",
        cookingTime: 75,
        servings: 8,
        ingredients: ["Pie crust", "Apples", "Sugar", "Cinnamon", "Butter", "Flour", "Lemon juice"],
        instructions: "1. Prepare pie crust\n2. Mix apple filling\n3. Assemble pie\n4. Bake until golden",
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "Butter Chicken",
        cuisine: "Indian",
        mealType: "Dinner",
        cookingTime: 50,
        servings: 6,
        ingredients: ["Chicken", "Butter", "Heavy cream", "Tomato sauce", "Garam masala", "Fenugreek", "Ginger garlic paste"],
        instructions: "1. Marinate chicken\n2. Cook in tandoor or oven\n3. Prepare sauce\n4. Combine and simmer",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Mediterranean Hummus",
        cuisine: "Mediterranean",
        mealType: "Snack",
        cookingTime: 20,
        servings: 8,
        ingredients: ["Chickpeas", "Tahini", "Lemon juice", "Garlic", "Olive oil", "Cumin", "Salt"],
        instructions: "1. Blend chickpeas\n2. Add tahini and seasonings\n3. Process until smooth\n4. Garnish and serve",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Pad See Ew",
        cuisine: "Thai",
        mealType: "Dinner",
        cookingTime: 25,
        servings: 4,
        ingredients: ["Wide rice noodles", "Chicken", "Chinese broccoli", "Eggs", "Soy sauce", "Dark soy sauce", "Garlic"],
        instructions: "1. Prepare noodles\n2. Stir-fry chicken\n3. Add vegetables and eggs\n4. Combine with sauce",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];