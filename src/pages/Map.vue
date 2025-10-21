<script setup>
import MapComponent from '../components/MapComponent.vue';


</script>

<template>
  <h1 class="text-center mt-5">Térkép</h1>
  <p class="text-center">Keresd meg hol vannak az esőerdőink!</p>
  <MapComponent/>
  <div class="text-center py-5">
    <h2>Többet?</h2>
    <p>Ha többet szeretne tudni az esőerdőinkról, nézze meg az interaktív e-learning oldalunkat.</p>
    <router-link to="/elearning" class="btn btnYellow">Menjünk</router-link> 
  </div>
  
  <div class="container-fluid bg-div"></div>
</template>
<style scoped>
#map {
   height: 500px;
}
</style>