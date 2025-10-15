<script setup>
import { ref, computed, onMounted } from 'vue'
import animals from '../data/animals.json'

const focusedAnimalID = ref(0)
const total = computed(() => animals.length)

const seenAnimals = ref(new Set([0]))

const numberOfSeenAnimals = computed(() => seenAnimals.value.size)
const scrollBarPercent = computed(() => Math.round((numberOfSeenAnimals.value / total.value) * 100))

const getImageUrl = (file) => new URL(`../assets/${file}`, import.meta.url).href
let modalInstance = null
onMounted(() => {
  const modalEl = document.getElementById('exampleModal')
  modalInstance = new window.bootstrap.Modal(modalEl)
})

const markSeen = (id) => {
  if (!seenAnimals.value.has(id)) {
    // We have to reset the memory address for Vue to react(no pun intended)
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

// This is a placeholder, and will be simplified via database and / or localstorage  integration
const randomAnimal = () => {
  const unseen = Array.from({ length: total.value }, (_, i) => i).filter(i => !seenAnimals.value.has(i))
  if (!unseen.length) return
  const rand = unseen[Math.floor(Math.random() * unseen.length)]
  focusedAnimalID.value = rand
  markSeen(rand)
}

</script>

<template>
  <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog-centered modal-lg modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Információ</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h2 class="fw-bold fs-3 text-center">{{ animals[focusedAnimalID].Name }}</h2>
          <p v-html="animals[focusedAnimalID].Description" class="text-center fw-bold lh-lg"></p>
          <p class="fw-bold text-danger text-center" v-if="animals[focusedAnimalID].isVenomous">Emberre veszélyes -
            mérgező!</p>
          <p class="fw-bold text-success text-center" v-else>Emberre bár veszélyes lehet, de nem mérgező!</p>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn bg-danger" data-bs-dismiss="modal">Bezárás</button>
          <button @click="nextAnimal()" class="btn btn-success px-4">Következő</button>
        </div>
      </div>
    </div>
  </div>

  <section class="container py-5 d-flex flex-column align-items-center gap-4">
    <h1 class="fw-bold text-center mb-4">Teszteld tudásod!</h1>

    <p class="text-center fw-bold lead text-muted lh-lg col-10 col-md-8">
      A népszerű <strong>„Would you rather”</strong> kvízjáték mintájára készült<br />
      tudáspróbánkon kipróbálhatod, mennyire ismered az állatok tulajdonságait -
      <em>miközben szórakozva tanulsz!</em>
    </p>

    <div class="container row">

      <div class="card text-center shadow-lg col-12">
        <div class="card-body row align-items-center gap-0 p-4">
          <h2 class="card-title col-12">Melyik állat <strong class="text-danger">mérgező?</strong> <br></h2>
          <div class="col-6 col-sm-12 col-md-12 my-3">
            <img class="img-fluid rounded shadow-sm" title="Kattints az állat adataiért! :)" @click="openDetails()"
              :src="getImageUrl(animals[focusedAnimalID].ImagePath)" :alt="animals[focusedAnimalID].Name" />
          </div>
          <div class="col-6 col-sm-12 col-md-12">
            <img class="img-fluid rounded shadow-sm" title="Kattints az állat adataiért! :)" @click="openDetails()"
              :src="getImageUrl(animals[focusedAnimalID].ImagePath)" :alt="animals[focusedAnimalID].Name" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 w-100 text-center">
      <h3 class="fw-bold mb-3">Nem lett a legjobb?</h3>
      <p class="mb-3 lead">Az E-learning részben újra felfedezheted a dzsungelt, és felkészülhetsz, hogy legközelebb a
        kvízben te legyél a túlélő!

      </p>


      <router-link to="/elearning">
        <button class="btn btn-outline-primary w-50 fw-bold">Benne vagyok!</button>
      </router-link>
    </div>

    <router-view />
  </section>

</template>

<style scoped>
.btn-light {
  border-radius: 5rem !important;
  padding: 0px !important;
}

.arrow-btn {
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
  transition: all 0.2s ease;
}

.arrow-btn:hover {
  background-color: rgba(76, 175, 80, 0.8);
  /* zöldes hover */
  color: white;
  transform: scale(1.1);
}


.card {
  border: none;
  border-radius: 1rem;
  background-color: #ffffff;
}

.card-body {
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

img {
  object-fit: contain;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.card-title {
  color: #4b7637
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