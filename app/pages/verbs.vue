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
  'Set 2: Hacer en Ir (doen en gaan)',
  'Set 3: Tener en Querer (hebben en willen)',
  'Set 4: Poder en Saber (kunnen en weten)',
  'Set 5: Pedir en Tocar (vragen en spelen)',
  'Set 6: Comer en Beber (eten en drinken)',
  'Set 7: Vivir en Trabajar (wonen en werken)',
  'Set 8: Hablar en Estudiar (praten en studeren)',
  'Set 9: Venir en Salir (komen en uitgaan)',
  'Set 10: Mixed Practice (gemengde oefening)'
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
