<template>
    <ul>
      <li v-for="r in recipes" :key="r.id">
        <FamilyRecipe class="recipePreview" :recipe="r" />
      </li>
    </ul>
</template>
    
    
    
    
<script>
    import FamilyRecipe from "../components/FamilyRecipe.vue";
    export default {
        components: {
            FamilyRecipe
        },
    
        data() {
            return {
            recipes:[]
            };
        },
        mounted(){
            this.recipes = [ 
                {
                    title: "Pancakes",
                    image:"http://www.foodparty.gr/eshop/394-thickbox_default/pancakes-%CF%80%CF%81%CE%BF%CF%88%CE%B7%CE%BC%CE%AD%CE%BD%CE%B1-70gr-50%CF%84%CE%BC%CF%87.jpg",
                    
                    description:"Perfect pancakes are easier to make than you think. This pancake recipe produces thick, fluffy, and all-around delicious pancakes with just a few ingredients that are probably already in your kitchen",
                    
                    ingredients: [
                    
                    "1 ½ cups all-purpose flour",
                    
                    "1 tablespoon white sugar",
                    
                    "¼ teaspoon salt, or more to taste",
                    
                    "1 ¼ cups milk",
                    
                    "3 tablespoons butter, melted",
                    
                    "1 egg",
                    
                    ],
                    
                    steps: [
                    
                    "Sift the dry ingredients together.",
                    
                    "Make a well, then add the wet ingredients. Stir to combine.",
                    
                    "Scoop the batter onto a hot griddle or pan.",
                    
                    "Cook for two to three minutes, then flip.",
                    
                    "Continue cooking until brown on both sides.",
                    
                    ]
                },
                {
                    title: "Crepes",
                
                    image:"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_924/https://www.smalltownwoman.com/wp-content/uploads/2019/01/Crepes-DSC_2043-II.jpg",

                    description:"This simple but delicious crêpe recipe can be made in minutes from ingredients that everyone has on hand.",

                    ingredients: [

                    "1 ½ cups all-purpose flour",

                    "1 tablespoon white sugar",

                    "1 ¼ cups milk",

                    "1 egg",

                    ],

                    steps: [

                    "Sift the dry ingredients together.",

                    "Make a well, then add the wet ingredients. Stir to combine.",

                    "Cook for two to three minutes, then flip.",

                    "Continue cooking until brown on both sides.",

                    ]
                },
                {
                    title: "waffles",
                
                    image:"https://bakerrecipes.com/wp-content/uploads/2018/11/waffle-recipes.png",
                    
                    description:"This waffle recipe is the only one you'll need to make homemade waffles with your waffle iron. ",
                    
                    ingredients: [" 2 large eggs",
                    
                    "2 cups all-purpose flour",
                    
                    "1 ¾ cups milk",
                    
                    "½ cup vegetable oil",
                    
                    "4 teaspoons baking powde",
                    
                    "½ teaspoon vanilla extract",
                    
                    "1 tablespoon white sugar",
                    
                    "¼ teaspoon salt",
                    
                    "nonstick cooking spray"],
                    
                    steps: [
                    
                    "Sift the dry ingredients together.",
                    
                    "Make a well, then add the wet ingredients. Stir to combine.",
                    
                    "Scoop the batter onto a hot griddle or pan.",
                    
                    "Cook for two to three minutes, then flip.",
                    
                    "Continue cooking until brown on both sides.",
                    
                    ],
                }
            ]
        }

    };
    
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
    