<template>
  <QuizTemplate
    :quiz-data="verbsData"
    :quiz-title="'Werkwoorden Quiz'"
    :quiz-description="'Oefen Spaanse werkwoordvervoegingen! Vertaal Nederlandse zinnen naar het Spaans met de juiste werkwoordvormen. Focus op belangrijke werkwoorden zoals ser, estar, hacer, ir, tener en meer.'"
    :instructions="'Vertaal de Nederlandse zin naar het Spaans'"
    :placeholder="'bijv. Soy estudiante...'"
    :set-label="'Kies een set van 10 zinnen:'"
    :set-options="setOptions"
    :custom-answer-check="checkVerbAnswer"
    :get-question-text="getQuestionText"
    :get-answer-text="getAnswerText"
  />
</template>

<script setup lang="ts">
import { spanishExercisesData } from '~/data/spanishExercises'

// Transform data to match QuizTemplate interface
const verbsData = spanishExercisesData.map(set => 
  set.map(exercise => ({
    dutch: exercise.dutch,
    spanish: exercise.spanish,
    verb: exercise.verb,
    id: exercise.id
  }))
)

const setOptions = [
  'Set 1: Ser en Estar (zijn - basis vormen)',
  'Set 2: Hacer en Ir (doen/maken en gaan)',
  'Set 3: Querer en Poder (willen en kunnen)',
  'Set 4: Pedir en Saber (vragen/bestellen en weten)',
  'Set 5: Tocar en gemengde oefeningen'
]

// Helper functions for verbs quiz
const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/gi, "")
}

function checkVerbAnswer(userAnswer: string, correctAnswer: string, question: any) {
  const normalizedUser = normalizeText(userAnswer)
  const normalizedCorrect = normalizeText(correctAnswer)
  return normalizedUser === normalizedCorrect
}

function getQuestionText(question: any) {
  return question.dutch
}

function getAnswerText(question: any) {
  return question.spanish
}
</script>
