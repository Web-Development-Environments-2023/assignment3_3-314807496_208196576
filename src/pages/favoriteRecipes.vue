<template>
    <div class="container">
      <RecipePreviewList title="Favorite Recipes" class="RandomRecipes center" />
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>

      <!-- <div
        style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
      >
        Centeredasdasdad
      </div>-->
    </div>
  </template>

<script>
import RecipePreviewList from "../components/FavoriteRecipePreviewList";
export default {
  components: {
    RecipePreviewList
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
