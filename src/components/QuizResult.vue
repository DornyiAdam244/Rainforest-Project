<script setup>
import animalsRaw from '../data/animals.json'
import { computed } from 'vue';
import { getImageUrl } from '../utilities/animalsUtility';
import { registeredUser } from '../utilities/crudUtility';

const bestQuiz = registeredUser.value.getBestQuizResult();



</script>

<template>
    <section class="row justify-content-center p-3">
        <div class="col-lg-3 col-md-6 col-sm-12">
            <h2>Legjobb kvíz eredmény</h2>
            <p>{{ bestQuiz }} / 10</p>
        </div>
    </section>
</template>

<style scoped>

</style>