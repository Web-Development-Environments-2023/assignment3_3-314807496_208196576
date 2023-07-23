<template>
    <b-container>
      <h3>
        {{ title }}:
        <slot></slot>
      </h3>
      <ul>
      <li v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </li>
    </ul>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./MyRecipePreview.vue";
  export default {
    name: "RecipePreviewList",
    components: {
      RecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {
        try {
          console.log("server_domain " + this.$root.store.server_domain)
          this.axios.defaults.withCredentials = true;
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/myRecipes",
            {withCredentials: true}
            // "https://test-for-3-2.herokuapp.com/recipes/random"
          );
  
          // console.log(response);
          const recipes = response.data;
          this.recipes.push(...recipes);
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }
  </style>
  