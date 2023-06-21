<template>
  <div>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="searchParams.name">
    </div>
    <div v-if="showFilters">
      <div>
        <label for="id">ID:</label>
        <input type="number" id="id" v-model.number="searchParams.id">
      </div>
      <div>
        <label for="readyInMinutes">Ready In Minutes:</label>
        <input type="number" id="readyInMinutes" v-model.number="searchParams.readyInMinutes">
      </div>
      <div>
        <label for="vegan">Vegan:</label>
        <input type="checkbox" id="vegan" v-model="searchParams.vegan">
      </div>
      <div>
        <label for="vegetarian">Vegetarian:</label>
        <input type="checkbox" id="vegetarian" v-model="searchParams.vegetarian">
      </div>
      <div>
        <label for="glutenFree">Gluten Free:</label>
        <input type="checkbox" id="glutenFree" v-model="searchParams.glutenFree">
      </div>
    </div>
    <button @click="showFilters = !showFilters">Filter</button>
    <button @click="search">Search</button>

    <div v-if="searchResult">
      <h3>Search Result</h3>
      <ul>
        <li>ID: {{ searchResult.id }}</li>
        <li>Title: {{ searchResult.title }}</li>
        <li>Ready In Minutes: {{ searchResult.readyInMinutes }}</li>
        <li>Image: {{ searchResult.image }}</li>
        <li>Aggregate Likes: {{ searchResult.aggregateLikes }}</li>
        <li>Vegan: {{ searchResult.vegan }}</li>
        <li>Vegetarian: {{ searchResult.vegetarian }}</li>
        <li>Gluten Free: {{ searchResult.glutenFree }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilters: false,
      searchParams: {
        name: '',
        id: null,
        readyInMinutes: null,
        vegan: false,
        vegetarian: false,
        glutenFree: false
      },
      searchResult: null
    }
  },
  methods: {
    async search() {
      try{
        const response = await this.axios.get(this.$root.store.server_domain + "/recipes/search",{params: this.searchParams},{withCredentials: true})
        this.searchResult = response.data
      }
      catch (error) {
        console.log(error);
      }
    }
  }
}
</script>