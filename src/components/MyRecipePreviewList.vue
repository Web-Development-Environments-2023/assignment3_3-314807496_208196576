<template>
    <b-container>
      <h3>
        {{ title }}:
        <slot></slot>
      </h3>
      <b-row>
        <b-col v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
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
          let recipesData = [];
          for(const id of recipes){
              const response = await this.axios.get(this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId, { withCredentials: true },)
              let {
              id,
              title,
              readyInMinutes,
              image,
              aggregateLikes,
              vegan,
              vegetarian,
              glutenFree
              } = response.data;
              recipesData.push({id,title,readyInMinutes,image,aggregateLikes,vegan,vegetarian,glutenFree})
          }
          this.recipes = [];
          this.recipes.push(...recipesData);
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
  