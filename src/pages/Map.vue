<script setup>
import MapComponent from '../components/MapComponent.vue';


</script>

<template>
  <h1 class="text-center mt-5">Térkép</h1>
  <p class="text-center">Keresd meg hol vannak az esőerdőink!</p>
  <MapComponent/>
</template>

<style scoped>
#map {
   height: 500px;
}
</style>