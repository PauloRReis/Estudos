<template>
  <div class="home">
    <h1>Restaurantes</h1>
    <div id="card">
      <RestauranteInfo v-for="restaurante in restaurantes" :key="restaurante.id" :restaurante="restaurante"/>
    </div>
  </div>
</template>

<script>
import RestauranteController from "../controllers/RestauranteController.js"
import RestauranteInfo from './RestauranteInfo.vue';

export default{
  name: "HomeView",
  components: {
    RestauranteInfo
  },
  data(){
    return{
      restaurantes: [],
    };
  },
  async created(){
    await this.fetchRestaurantes();
  },
  methods: {
    async fetchRestaurantes(){
      try {
        this.restaurantes = await RestauranteController.buscarTodosRestaurantes();
      } catch (error) {
        console.error("Erro ao carregar restaurantes", error);
      }
    }
  }

}

</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>