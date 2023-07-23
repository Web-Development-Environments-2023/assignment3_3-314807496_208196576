<template>
  <div id="app">
    <div id="nav">
      <router-link :background-color="indianred"  :to="{ name: 'main' }">Vue Recipes</router-link>
      <router-link :background-color="indianred" :to="{ name: 'search' }">Search</router-link>
      <router-link :background-color="indianred" :to="{ name: 'about' }">About</router-link>
      <span v-if="!$root.store.username">
        Guest:
        <router-link :background-color="indianred" :to="{ name: 'register' }">Register</router-link>
        <router-link :background-color="indianred" :to="{ name: 'login' }">Login</router-link>
      </span>
      <span v-else>
        <b-dropdown text="Personal" id="dropdown-1" class="m-2">
        <b-dropdown-item @click="goToPage('favoriteRecipes')">Favorite Recipes</b-dropdown-item>
        <b-dropdown-item @click="goToPage('myRecipes')">My Recipes</b-dropdown-item>
        <b-dropdown-item @click="goToPage('familyRecipes')">Family Recipes</b-dropdown-item>
        </b-dropdown>
        <b-button class="m-2" @click = "showModal = !showModal">Add Recipe</b-button>
        <div>
        <b-modal v-if = "showModal" @close="showModal = false">
          <h3 slot = "header">Enter fields</h3>
          <div slot = "body">
            <form @submit.prevent = "submitForm">
              <div>
                <label for="recipe_id">Recipe Id:</label>
                <input type="number" id="id" v-model.number="formData.id">
              </div>
              <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="formData.title">
              </div>
              <div>
                <label for="readyInMinutes">Ready In Minutes:</label>
                <input type="number" id="readyInMinutes" v-model.number="formData.readyInMinutes">
              </div>
              <div>
                <label for="image">Image URL:</label>
                <input type="text" id="image" v-model = "formData.image">
              </div>
              <div>
                <label for="aggregateLikes">Aggregate Likes:</label>
                <input type="number" id="aggregateLikes" v-model.number="formData.aggregateLikes">
              </div>
              <div>
                <label for="vegan">Vegan:</label>
                <input type="checkbox" id="vegan" v-model="formData.vegan">
              </div>
              <div>
                <label for="vegetarian">Vegetarian:</label>
                <input type="checkbox" id="vegetarian" v-model="formData.vegetarian">
              </div>
              <div>
                <label for="glutenFree">Gluten Free:</label>
                <input type="checkbox" id="glutenFree" v-model="formData.glutenFree">
              </div>
            </form>
          </div>
          <div slot="footer">
            <b-button @click="close">Cancel</b-button> 
            <b-button @click="submitForm">OK</b-button> 
          </div>
        </b-modal>
        <div>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>
        </div>
        </div>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() { 
    return { 
      showModal: false,
      formData: {
        title: '',
        id: null,
        readyInMinutes: null,
        image: null,
        aggregateLikes: null,
        vegan: false,
        vegetarian: false,
        glutenFree: false
      }
    } 
  }, 
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    goToPage(option) {
      this.showModal = false
      this.$router.push(`/${option}`);
    },
    handleFileUpload(event) {
      this.formData.image = event.target.files[0]
    },
    async submitForm() {
      try{
        const response = await this.axios.post(this.$root.store.server_domain + "/users/myRecipes",this.formData,{withCredentials: true})
      }
      catch (error) {
        console.log(error);
      }
      this.showModal = false
    },
    close(){
      this.showModal = false
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  background-color: #20e919
}

#nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
} 

#nav a.router-link-exact-active {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

</style>
