<template>
    <div class="card">
        <h3>{{ restaurante.nome }}</h3>
        <p><strong>Tipo:</strong> {{ restaurante.categoria }}</p>
        <p><strong>Endereço:</strong> {{ restaurante.endereco }}</p>
    </div>
</template>

<script>
    export default{
        name: "RestauranteInfo",
        props: {
            restaurante:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  min-height: 150px;
  background-color: #f9f9f9;
}
</style>