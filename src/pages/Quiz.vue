<script setup>
import { ref, onMounted } from 'vue'
import { registeredUser, updateRegisteredUserData, bestQuiz } from '../utilities/crudUtility'
import { getImageUrl } from '../utilities/animalsUtility'
import animals from '../data/animals.json'
import QuizResult from '../components/QuizResult.vue'
const evaluatedPair = ref(false)
const currentQuestionCorrect = ref(false);
const animalPairs = ref([])
const correctQuestions = ref(0)
const maxQuestions = ref(10)
const totalQuestionsDone = ref(0)
const previousAnimals = ref({})
let modalInstance = null
onMounted(() => {
  const modalEl = document.getElementById('exampleModal')
  modalInstance = new window.bootstrap.Modal(modalEl)
})

const isReversed = ref(false)

const getPair = () => {
  updateScore();
  if (totalQuestionsDone.value >= maxQuestions.value) return
  evaluatedPair.value = false
  modalInstance?.hide()
  animalPairs.value = {
    venomous: null,
    normal: null
  }

  while (animalPairs.value.venomous == null) {
    let random = randomAnimal()
    if (random.isVenomous && !previousAnimals.value[random.Name]) {
      animalPairs.value.venomous = random
      previousAnimals.value[random.Name] = true
    }
  }


  while (animalPairs.value.normal == null) {
    let random = randomAnimal()
    if (!random.isVenomous && !previousAnimals.value[random.Name]) {
      animalPairs.value.normal = random
      previousAnimals.value[random.Name] = true
    }
  }


  isReversed.value = Math.random() < 0.5
}

const randomAnimal = () => {
  return animals[Math.floor(Math.random() * animals.length)]
}

getPair()


const scoreBump = ref(false)

const valuateChoice = (isVenomous) => {
  if (evaluatedPair.value) modalInstance?.show()

  if (totalQuestionsDone.value >= maxQuestions.value || evaluatedPair.value) return
  currentQuestionCorrect.value = isVenomous
  if (isVenomous) {
    correctQuestions.value++
    scoreBump.value = true
    setTimeout(() => (scoreBump.value = false), 300)
  }
  totalQuestionsDone.value++;
  modalInstance?.show()
  evaluatedPair.value = true
}

function updateScore() {
  if (bestQuiz.value < correctQuestions.value) {
    bestQuiz.value = correctQuestions.value;
    registeredUser.value?.setBestQuizResult(bestQuiz.value);
    updateRegisteredUserData();
  }
}

const newGame = () => {
  previousAnimals.value = {}
  correctQuestions.value = 0
  totalQuestionsDone.value = 0
  getPair()
}
</script>

<template>
  <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog-centered modal-lg modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 v-if="!currentQuestionCorrect" class="fw-bold text-danger text-center">Hát ez nem sikerült!</h2>
          <h2 v-else class="fw-bold text-success text-center">Szép munka!</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h2 class="fw-bold fs-3 text-center">{{ animalPairs.venomous.Name }}</h2>
          <p v-html="animalPairs.venomous.Description" class="text-center fw-bold lh-lg"></p>


        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn bg-danger" data-bs-dismiss="modal">Bezárás</button>
          <button @click="getPair()" v-if="!(totalQuestionsDone.value >= maxQuestions.value)"
            class="btn btn-success px-4">Következő pár!</button>
        </div>
      </div>
    </div>
  </div>

  <section class="container py-5 d-flex flex-column align-items-center gap-4">
    <QuizResult/>
    <h1 class="fw-bold text-center mb-4">Teszteld tudásod!</h1>

    <p class="text-center fw-bold lead text-muted lh-lg col-10 col-md-8">
      A népszerű <strong>„Would you rather”</strong> kvízjáték mintájára készült<br />
      tudáspróbánkon kipróbálhatod, mennyire ismered az állatok tulajdonságait -
      <em>miközben szórakozva tanulsz!</em>
    </p>

    <div class="container row">

      <div class="card text-center shadow-lg col-12 p-0">
        <div class="card-body row align-items-center gap-0 p-4">
          <h2 class="card-title col-12">Melyik állat <strong class="text-danger">mérgező?</strong> <br></h2>
          <p class="lead text-muted text-center">
            <span :class="['score', { bump: scoreBump }]">{{ correctQuestions }}</span>/<span>{{ maxQuestions }}</span>
          </p>

          <div class="col-6 col-sm-12 col-md-6 mt -3"
            v-for="animal in isReversed ? [animalPairs.normal, animalPairs.venomous] : [animalPairs.venomous, animalPairs.normal]"
            :key="animal.Name">
            <img class="img-fluid rounded shadow-sm" :title="`Kattints a(z) ${animal.Name} adataiért! :)`"
              @click="valuateChoice(animal.isVenomous)" :src="getImageUrl(animal.ImagePath)" :alt="animal.Name" />
          </div>
          <button class="w-50 d-block mx-auto newGame btn" @click="newGame()">Új játék!</button>
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

.newGame {
  border-radius: 0 0 20px 20px !important;
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

.score {
  display: inline-block;
  transition: transform 0.25s ease;
}

.score.bump {
  transform: scale(1.4);
}
</style>