<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  
  <main>
    <Header/>
    <router-view />
    <Footer/>
  </main>
</template>
