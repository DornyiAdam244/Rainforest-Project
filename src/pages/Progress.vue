<script setup>
import Collection from '../components/Collection.vue';
import QuizResult from '../components/QuizResult.vue';
import animals from '../data/animals.json'
import router from '../router';
import { registeredUser } from '../utilities/crudUtility';
import { defaultAlertToast } from '../utilities/utility';

if (!registeredUser.value) {
    defaultAlertToast.showErrorToast("Úgy tűnik, nem vagy bejelentkezve!", "Hogy megtekinthesd az eddigi feloldott állatokat, kérlek jelentkezz be");
    defaultAlertToast.toastOnHide(router.back);
}

</script>

<template>
    <h1 class="text-center my-5">Felfedezett állatok ({{ registeredUser?.getSeenAnimals().size }}/{{ animals.length }})</h1>
    <Collection v-if="registeredUser"/>
    <h3 v-else>Gyűjtemény nem elérhető</h3>
</template>

<style scoped>
</style>