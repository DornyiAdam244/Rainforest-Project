<script setup>
import animalsRaw from '../data/animals.json'
import { computed, ref} from 'vue';
import { getImageUrl } from '../utilities/animalsUtility';
import { registeredUser } from '../utilities/crudUtility';

const bestQuiz = registeredUser.value.getBestQuizResult();
const maxScore = ref(10)


</script>

<template>
    <section class="quiz-result-wrapper text-center p-4">
      <div class="quiz-card mx-auto">
        <h2 class="quiz-title">🏆 Legjobb <br> kvíz eredmény</h2>
  
        <div class="quiz-score">
          <span class="score-number">{{ bestQuiz }}</span>
          <span class="score-divider">/</span>
          <span class="score-total">{{ maxScore }}</span>
        </div>
  
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${(bestQuiz / maxScore) * 100}%` }"
          ></div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .quiz-result-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .quiz-card {
    background: #f7f9f7;
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    padding: 30px;
    width: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .quiz-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  .quiz-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    color: #2e7d32;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }
  
  .quiz-score {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #1b5e20;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .progress-bar {
    width: 100%;
    height: 12px;
    background: #c8e6c9;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #81c784);
    border-radius: 10px;
    transition: width 0.6s ease;
  }
  </style>