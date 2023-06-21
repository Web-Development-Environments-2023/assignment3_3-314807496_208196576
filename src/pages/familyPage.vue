<template>

    <div id="background"></div>
    
    <div>
    
    <div class="title">
    
    <h1>{{ recipe.title1 }}</h1>
    
    </div>
    
    <img :src="recipe.image1" alt="recipe image" />
    
    <div class="des">
    
    <p>{{ recipe.description1 }}</p>
    
    </div>
    
    <div class="ing-t">
    
    <h2>Ingredients:</h2>
    
    </div>
    
    <ul>
    
    <div class="ing">
    
    <li v-for="ingredient in recipe.ingredients1" :key="ingredient">
    
    {{ ingredient }}
    
    </li>
    
    </div>
    
    </ul>
    
    <div class="ins-t">
    
    <h2>Instructions:</h2>
    
    </div>
    
    <ol>
    
    <div class="ins">
    
    <li v-for="step in recipe.steps1" :key="step">
    
    {{ step }}
    
    </li>
    
    </div>
    
    </ol>
    
    </div>
    
    
    
    
    <div>
    
    <div class="title">
    
    <h1>{{ recipe.title2 }}</h1>
    
    </div>
    
    <img :src="recipe.image2" alt="recipe image" />
    
    <div class="des">
    
    <p>{{ recipe.description2 }}</p>
    
    </div>
    
    <div class="ing-t">
    
    <h2>Ingredients:</h2>
    
    </div>
    
    <ul>
    
    <div class="ing">
    
    <li v-for="ingredient in recipe.ingredients2" :key="ingredient">
    
    {{ ingredient }}
    
    </li>
    
    </div>
    
    </ul>
    
    <div class="ins-t">
    
    <h2>Instructions:</h2>
    
    </div>
    
    <ol>
    
    <div class="ins">
    
    <li v-for="step in recipe.steps2" :key="step">
    
    {{ step }}
    
    </li>
    
    </div>
    
    </ol>
    
    </div>
    
    
    
    
    <div>
    
    <div class="title">
    
    <h1>{{ recipe.title3 }}</h1>
    
    </div>
    
    <img :src="recipe.image3" alt="recipe image" />
    
    <div class="des">
    
    <p>{{ recipe.description3 }}</p>
    
    </div>
    
    <div class="ing-t">
    
    <h2>Ingredients:</h2>
    
    </div>
    
    <ul>
    
    <div class="ing">
    
    <li v-for="ingredient in recipe.ingredients3" :key="ingredient">
    
    {{ ingredient }}
    
    </li>
    
    </div>
    
    </ul>
    
    <div class="ins-t">
    
    <h2>Instructions:</h2>
    
    </div>
    
    <ol>
    
    <div class="ins">
    
    <li v-for="step in recipe.steps3" :key="step">
    
    {{ step }}
    
    </li>
    
    </div>
    
    </ol>
    
    </div>
    
    </template>
    
    
    
    
    <script>
    
    export default {
    
    data() {
    
    return {
    
    recipe: {
    
    title1: "Pancakes",
    
    image1:
    
    "https://www.simplyrecipes.com/thmb/0zJj5LZvKt8JZzq9QVf6XVv9W4s=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Carbonara-LEAD-1-7b8d3e5c6f7d4a7e8b6d9a5f6c4d3b5f.jpg",
    
    description1:
    
    "Perfect pancakes are easier to make than you think. This pancake recipe produces thick, fluffy, and all-around delicious pancakes with just a few ingredients that are probably already in your kitchen",
    
    ingredients1: [
    
    "1 ½ cups all-purpose flour",
    
    "1 tablespoon white sugar",
    
    "¼ teaspoon salt, or more to taste",
    
    "1 ¼ cups milk",
    
    "3 tablespoons butter, melted",
    
    "1 egg",
    
    ],
    
    steps1: [
    
    "Sift the dry ingredients together.",
    
    "Make a well, then add the wet ingredients. Stir to combine.",
    
    "Scoop the batter onto a hot griddle or pan.",
    
    "Cook for two to three minutes, then flip.",
    
    "Continue cooking until brown on both sides.",
    
    ],
    
    title2: "Crepes",
    
    image2:
    
    "https://www.simplyrecipes.com/thmb/0zJj5LZvKt8JZzq9QVf6XVv9W4s=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Carbonara-LEAD-1-7b8d3e5c6f7d4a7e8b6d9a5f6c4d3b5f.jpg",
    
    description2:
    
    "This simple but delicious crêpe recipe can be made in minutes from ingredients that everyone has on hand.",
    
    ingredients2: [
    
    "1 ½ cups all-purpose flour",
    
    "1 tablespoon white sugar",
    
    "1 ¼ cups milk",
    
    "1 egg",
    
    ],
    
    steps2: [
    
    "Sift the dry ingredients together.",
    
    "Make a well, then add the wet ingredients. Stir to combine.",
    
    "Cook for two to three minutes, then flip.",
    
    "Continue cooking until brown on both sides.",
    
    ],
    
    title3: "waffles",
    
    image3:
    
    "https://www.simplyrecipes.com/thmb/0zJj5LZvKt8JZzq9QVf6XVv9W4s=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Carbonara-LEAD-1-7b8d3e5c6f7d4a7e8b6d9a5f6c4d3b5f.jpg",
    
    description3:
    
    "This waffle recipe is the only one you'll need to make homemade waffles with your waffle iron. ",
    
    ingredients3: [" 2 large eggs",
    
    "2 cups all-purpose flour",
    
    "1 ¾ cups milk",
    
    "½ cup vegetable oil",
    
    "4 teaspoons baking powde",
    
    "½ teaspoon vanilla extract",
    
    "1 tablespoon white sugar",
    
    "¼ teaspoon salt",
    
    "nonstick cooking spray"],
    
    steps3: [
    
    "Sift the dry ingredients together.",
    
    "Make a well, then add the wet ingredients. Stir to combine.",
    
    "Scoop the batter onto a hot griddle or pan.",
    
    "Cook for two to three minutes, then flip.",
    
    "Continue cooking until brown on both sides.",
    
    ],
    
    },
    
    };
    
    },
    
    };
    
    </script>
    
    
    
    
    <style scoped>
    
    .title {
    
    font-size: 34px;
    
    margin-bottom: 21px;
    
    color: #13411f;
    
    }
    
    .des {
    
    font-size: 25px;
    
    margin-bottom: 15px;
    
    color: #193d21;
    
    }
    
    .ing-t {
    
    font-size: 25px;
    
    margin-bottom: 15px;
    
    color: #193d21;
    
    }
    
    .ins-t {
    
    font-size: 25px;
    
    margin-bottom: 15px;
    
    color: #193d21;
    
    }
    
    
    
    
    #background {
    
    position: fixed;
    
    top: 0;
    
    left: 0;
    
    width: 100%;
    
    height: 100%;
    
    color: #1eb43f;
    
    background-size: cover;
    
    z-index: -1;
    
    background-position: center;
    
    opacity: 0.39;
    
    }
    
    </style>