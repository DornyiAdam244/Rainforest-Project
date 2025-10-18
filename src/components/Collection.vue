<script setup>
import animalsRaw from '../data/animals.json'
import { computed } from 'vue';
import { getImageUrl } from '../utilities/animalsUtility';
import { registeredUser } from '../utilities/crudUtility';

const seenAnimals = registeredUser.value.getSeenAnimals();


const animals = computed(() =>
    animalsRaw.map(animal => ({
        ...animal,
        hasSeen: seenAnimals.has(animal.id - 1)
    })).sort((a, b) => {
      return (a.hasSeen === b.hasSeen) ? 0 : a.hasSeen ? -1 : 1;
    })
);


function arrangeAnimalsBySeenStatus() {
    for (let i = 0; i < animals.value.length; i++) {
        if (animals.value[i].hasSeen) {
            let preIndexSlice = animals.value.slice(0, i);
            let postIndexSlice = animals.value.slice(i + 1);
            preIndexSlice.unshift(animals.value[i]);
            animals.value = preIndexSlice.concat(postIndexSlice);
        }
    }
}



</script>

<template>
    <section class="row justify-content-center p-3">
        <div class="card col-lg-3 col-md-6 col-sm-12" v-for="animal in animals">
            <div class="image-wrapper position-relative">
                <img :src="getImageUrl(animal.ImagePath)" class="card-img-top" :class="{ 'blurred': !animal.hasSeen }"
                    :alt="animal.hasSeen ? animal.Name : ''" :title="animal.hasSeen ? animal.Name : ''" />
                <div v-if="!animal.hasSeen" class="locked-overlay">
                    🔒
                </div>
            </div>
            <div class="card-body">
                <h4 class="card-title text-center">{{ animal.hasSeen ? animal.Name : '?'.repeat(10) }}</h4>
                <p class="card-text text-center" v-html="animal.hasSeen ? animal.Description : '?'.repeat(20)"></p>
                <p v-if="!animal.hasSeen" class="text-center">{{ '?'.repeat(20) }}</p>
                <div v-else>
                    <p class="card-text fw-bold text-danger text-center" v-if="animal.isVenomous">Emberre veszélyes
                        -
                        mérgező!</p>
                    <p class="card-text fw-bold text-success text-center" v-else>Emberre bár veszélyes lehet, de nem
                        mérgező!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
    margin: 10px;
    padding: 0;
}

h4 {
    font-size: 32px;
    margin-bottom: 20px;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
}

.card-body {
    padding: 20px;
}

.image-wrapper {
    position: relative;
}

.blurred {
    filter: blur(10px);
    transition: filter 0.3s ease;
}


.blurred:hover {
    filter: blur(8px);
}

.blurred:hover,
.locked-overlay {
    cursor: not-allowed;
}



.locked-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
}
</style>