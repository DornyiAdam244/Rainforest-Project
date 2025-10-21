<script setup>
import { ref, computed, onMounted } from 'vue'
import animals from '../data/animals.json'
import { defaultAlertToast } from '../utilities/utility'
import { registeredUser, updateSeenAnimalsForRegisteredUser } from '../utilities/crudUtility'
import { getImageUrl } from '../utilities/animalsUtility'

const focusedAnimalID = ref(getFocusedAnimalID());


function getFocusedAnimalID() {
  const seenAnimalsSet = registeredUser.value?.getSeenAnimals();
  if (seenAnimalsSet && seenAnimalsSet.size != 0) {
    return [...seenAnimalsSet].pop();
  }
  return 0;
}

const total = computed(() => animals.length)

//const seenAnimals = ref(new Set([0]))

const seenAnimals = ref(registeredUser.value?.getSeenAnimals() || new Set([0]));


const query = ref("")
const queries = ref([])

const numberOfSeenAnimals = computed(() => seenAnimals.value.size)
const scrollBarPercent = computed(() => Math.round((numberOfSeenAnimals.value / total.value) * 100))

showToastAlertIfNotRegistered();
let modalInstance = null
onMounted(() => {
  const modalEl = document.getElementById('exampleModal')
  modalInstance = new window.bootstrap.Modal(modalEl)
})

function showToastAlertIfNotRegistered() {
  if (!registeredUser.value) {
    defaultAlertToast.setIcon("bi-exclamation-diamond-fill", "text-warning");
    defaultAlertToast.setTitle("Úgy tűnik, nem vagy bejelentkezve!");
    defaultAlertToast.setMessage("Ha bejelentkezel, elmenthedet előrehaladásod és nyomonkövetheted az eddig felfedezett állatokat!");
    defaultAlertToast.show();
  }
}

const validate = (name) => {

  if (!name || name.trim() === '') {
    return { valid: false, message: 'Add meg az állat nevét!' }
  }
  const pattern = /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű\s-]+$/
  if (!pattern.test(name.trim())) {
    return { valid: false, message: 'A név csak betűket és szóközöket tartalmazhat!' }
  }
  return { valid: true, message: '✅ Érvényes név' }
}

const searchForAnimal = () => {
  if (!validate(query.value).valid) {
    alert(validate(query.value).message)
    return
  }
  queries.value = animals.filter(a => a.Name.toLowerCase().includes(query.value.toLowerCase()))
  console.log(queries.value);

  if (queries.value.length == 1) {
    focusedAnimalID.value = queries.value[0].id - 1
    markSeen(focusedAnimalID.value)
  }
}

const markSeen = (id) => {
  if (!seenAnimals.value.has(id)) {
    // We have to reset the memory address for Vue to react(no pun intended)
    const next = new Set(seenAnimals.value)
    next.add(id)
    seenAnimals.value = next
    if (registeredUser.value) {
      registeredUser.value.setSeenAnimals(seenAnimals.value);
      updateSeenAnimalsForRegisteredUser();
    };
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
    <h1 class="fw-bold text-center mb-4">E-learning</h1>

    <p class="text-center fw-bold lead text-muted lh-lg col-10 col-md-8">
      Fedezd fel velünk az <strong>esőerdők különleges állatvilágát!</strong><br />
      Játékos, figyelemfelkeltő tudástárunk segít bárkinek tanulni interaktív módon –
      <em>képekkel, hangokkal és érdekességekkel!</em>
    </p>

    <div class="card text-center shadow-lg col-12 col-md-8 col-lg-5">
      <div class="card-body d-flex flex-column align-items-center gap-3 p-4">

        <h2 v-if="numberOfSeenAnimals < 20" class="card-title fw-bold mb-2">
          Megtekintett állatok {{ numberOfSeenAnimals }}/20
        </h2>
        <h2 v-else class="card-title text-success fw-bold mb-2">Kész!</h2>
        <form @submit.prevent="searchForAnimal()" class="w-50">
          <div class="mb-2 input-group">
            <span @click="searchForAnimal()" class="input-group-text" id="basic-addon1">
              <bi class="bi-search"></bi>
            </span>
            <input v-model="query" placeholder='Pl. "kék" vagy "vipera"' type="text" class="form-control"
              id="animalName">
          </div>
          <ul v-if="queries.length > 1" class="list-group">
            <li :class="{ active: focusedAnimalID === value.id - 1 }" v-for="(value, index) in queries" :key="index"
              class="list-group-item list-group-item-action"
              @click="focusedAnimalID = value.id - 1; markSeen(focusedAnimalID)">
              <p class="m-0 p-0">{{ value.Name }}</p>
            </li>
          </ul>

        </form>

        <div class="progress w-100 mb-2" style="height: 12px;">
          <div class="progress-bar bg-success" :style="{ width: scrollBarPercent + '%' }" role="progressbar"
            :aria-valuenow="scrollBarPercent" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div class="position-relative w-100">
          <img class="img-fluid rounded shadow-sm" title="Kattints az állat adataiért! :)" @click="openDetails()"
            :src="getImageUrl(animals[focusedAnimalID].ImagePath)" :alt="animals[focusedAnimalID].Name" />

          <button @click.stop="previousAnimal()"
            class="btn btn-light position-absolute top-50 start-0 translate-middle-y arrow-btn ms-3">
            <i class="bi bi-chevron-left"></i>
          </button>

          <button @click.stop="nextAnimal()"
            class="btn btn-light position-absolute top-50 end-0 translate-middle-y arrow-btn me-3">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-5 w-100 text-center">
      <h3 class="fw-bold mb-3">Tesztelnéd tudásod?</h3>
      <p class="mb-3 lead">Képzeld el, hogy egy dzsungelben jársz!
        Interaktív, „Would You Rather?” stílusú kvízünkben izgalmas döntések várnak, miközben megismered a mérgező
        állatok rejtett titkait.
      </p>
      <router-link to="/quiz">
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

.bi-search {
  cursor: pointer;
}

.active.list-group-item.list-group-item-action {
  background-color: var(--bg-main);
  border-color: var(--text-main);
}
</style>