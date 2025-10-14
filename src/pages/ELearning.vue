<script setup>
import { ref, computed, onMounted } from 'vue'
import animals from '../data/animals.json'

const focusedAnimalID = ref(0)
const total = computed(() => animals.length)

const seenAnimals = ref(new Set([0]))

const numberOfSeenAnimals = computed(() => seenAnimals.value.size)
const percent = computed(() => Math.round((numberOfSeenAnimals.value / total.value) * 100))

const getImageUrl = (file) => new URL(`../assets/${file}`, import.meta.url).href
let modalInstance = null
onMounted(() => {
  const modalEl = document.getElementById('exampleModal')
  modalInstance = new window.bootstrap.Modal(modalEl)
})

const markSeen = (id) => {
  if (!seenAnimals.value.has(id)) {
    const next = new Set(seenAnimals.value)
    next.add(id)
    seenAnimals.value = next
  }
}

const openDetails = () => {
  markSeen(focusedAnimalID.value)
  modalInstance?.show()
}

const nextAnimal = () => {
  focusedAnimalID.value = (focusedAnimalID.value + 1) % total.value
  markSeen(focusedAnimalID.value)
  modalInstance?.hide()
}

const previousAnimal = () => {
  focusedAnimalID.value = (focusedAnimalID.value - 1 + total.value) % total.value
  markSeen(focusedAnimalID.value)
}
// If you have questions regarding this line don't 
// I was told to use ChatGPT to make it clean code and refactor it nicely, well he did it --> from 13 lines to 8 so we're good or idk
const randomAnimal = () => {
  const unseen = Array.from({ length: total.value }, (_, i) => i).filter(i => !seenAnimals.value.has(i))
  if (!unseen.length) return
  const rand = unseen[Math.floor(Math.random() * unseen.length)]
  focusedAnimalID.value = rand
  markSeen(rand)
}

</script>

<template>
  <section class="container-fluid d-flex flex-column align-items-center gap-4 py-5">
    <h1 class="text-center fw-bold">E-learning</h1>

    <p class="text-center fw-bold lead text-muted lh-lg col-10 col-md-8">
      Fedezd fel velünk az <strong>esőerdők különleges állatvilágát!</strong><br />
      Játékos, figyelemfelkeltő tudástárunk segít bárkinek tanulni interaktív módon -
      <em>képekkel, hangokkal és érdekességekkel!</em>
    </p>
    <div
      class="col-lg-6 col-12 col-md-8 col-sm-10 text-center d-flex flex-column align-items-center container-fluid gap-4">
      <h2 v-if="numberOfSeenAnimals < 20">Megtekintett állatok {{ numberOfSeenAnimals }}/20</h2>
      <h2 v-else>Kész!</h2>
      <div class="progress w-100" style="height: 20px;">
        <div class="progress-bar bg-success" :style="{ '--bs-progress-bar-width': percent + '%', width: percent + '%' }"
          role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <img title="Kattints az állat adataiért! :)" @click="openDetails()"
        :src="getImageUrl(animals[focusedAnimalID].ImagePath)" :alt="animals[focusedAnimalID].Name"
        class="img-fluid rounded shadow" />
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog-centered modal-lg modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="fw-bold fs-5">{{ animals[focusedAnimalID].Name }}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p v-html="animals[focusedAnimalID].Description" class="text-center fw-bold lh-lg"></p>
              <p class="fw-bold text-danger" v-if="animals[focusedAnimalID].isVenomous">Emberre veszélyes - mérgező!</p>
              <p class="fw-bold text-success" v-else>Emberre bár veszélyes lehet, de nem mérgező!</p>
            </div>
            <div class="modal-footer text-center">
              <button type="button" class="btn bg-danger" data-bs-dismiss="modal">Bezárás</button>
              <button @click="nextAnimal()" class="btn btn-success px-4">Következő</button>
            </div>
          </div>
        </div>
      </div>


      <div class="row justify-content-around">
        <div class="col-auto">
          <button @click="previousAnimal()" class="btn-danger bg-danger btn  px-4">Előző</button>
        </div>
        <div class="col-auto">
          <button @click="randomAnimal()" class="btn bg-warning px-4">Random</button>
        </div>
        <div class="col-auto">
          <button @click="nextAnimal()" class="btn btn-success px-4">Következő</button>
        </div>
      </div>
      <div class="row m-5">
        <h2 class="text-center fw-bold">Tesztelnéd tudásod?</h2>

        <router-link to="/quiz"> <button class="btn w-50 d-block mx-auto mt-5">Vigyél oda!</button></router-link>


      </div>
    </div>

    <router-view />
  </section>
</template>

<style scoped>
img {
  object-fit: contain;
  width: 100%;
  height: auto;

}

img {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

img:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
}



.btn {
  font-size: 15px;
  font-weight: 600;
}
</style>