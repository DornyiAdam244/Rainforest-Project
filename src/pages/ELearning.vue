<script setup>
import { ref } from 'vue';
import animals from '../data/animals.json'
const numberOfSeenAnimals = ref(1)
const focusedAnimalID = ref(0)

const nextAnimal = () => {
  focusedAnimalID.value += 1
  numberOfSeenAnimals.value += 1
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

    <div class="col-12 col-md-6 text-center d-flex flex-column align-items-center container-fluid gap-4">
      <h2>Megtekintett állatok {{ numberOfSeenAnimals }}/20</h2>
      <div class="progress w-100" style="height: 20px;">
        <div class="progress-bar bg-success" :style="{ width: (numberOfSeenAnimals / 20 * 100) + '%' }"></div>
      </div>



      <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../assets/placeholder.png" alt="tanuljunk"
        title="Mahagóniai tigris" class="img-fluid rounded shadow d-block">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="fw-bold fs-5">Tigrincs</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p v-html="animals[focusedAnimalID].Description" class="text-center fw-bold lh-lg">
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger mx-auto d-block" data-bs-dismiss="modal">Bezárás</button>
            </div>
          </div>
        </div>
      </div>


      <div class="row justify-content-around">
        <div class="col-auto">
          <button class="btn btn-danger px-4">Előző</button>
        </div>
        <div class="col-auto">
          <button class="btn btn-warning px-4">Random</button>
        </div>
        <div class="col-auto">
          <button @click="nextAnimal()" class="btn btn-success px-4">Következő</button>
        </div>
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

.btn-danger {
  background-color: var(--danger) !important;
}

.btn-warning {
  background-color: var(--warning) !important;
}

.bg-success {
  background-color: var(--success) !important;
}

.btn {
  font-size: 15px;
  font-weight: 600;
}
</style>