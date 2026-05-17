<template>
  <QuizTemplate
    :quiz-data="transformedData"
    :quiz-title="'Wederkerige Werkwoorden Quiz'"
    :quiz-description="'Oefen Spaanse wederkerige werkwoorden (reflexive verbs)! Begin met eenvoudige infinitief vormen en werk toe naar complete zinnen met reflexive pronouns. De sets worden geleidelijk moeilijker - start bij Set 1 voor de beste leerervaring.'"
    :instructions="'Vertaal de Nederlandse zin naar het Spaans'"
    :placeholder="'bijv. Me lavo...'"
    :set-label="'Kies een set (⭐ = makkelijk → ⭐⭐⭐⭐ = moeilijk):'"
    :set-options="setOptions"
    :custom-answer-check="checkReflexiveAnswer"
    :get-question-text="getQuestionText"
    :get-answer-text="getAnswerText"
  />
</template>

<script setup lang="ts">
import { reflexiveVerbsData } from '~/data/reflexiveVerbs'

// Transform data to match QuizTemplate interface and reorder sets
const originalData = reflexiveVerbsData.map(set => 
  set.map(exercise => ({
    dutch: exercise.dutch,
    spanish: exercise.spanish,
    infinitive: exercise.infinitive,
    reflexivePronoun: exercise.reflexivePronoun,
    id: exercise.id
  }))
)

// Use the original data directly without reordering
const transformedData = originalData

const setOptions = [
  'Set 1: Dagelijkse routine - wassen & kleden (⭐ Eenvoudig)',
  'Set 2: Persoonlijke zorg & voorbereiding (⭐ Eenvoudig)',
  'Set 3: Gevoelens & emoties (⭐⭐ Gemiddeld)',
  'Set 4: Beweging & positie (⭐⭐ Gemiddeld)',
  'Set 5: Sociale interacties & gedrag (⭐⭐ Gemiddeld)',
  'Set 6: Fouten & ontmoetingen (⭐⭐ Gemiddeld)',
  'Set 7: Plezier & gemoedstoestand (⭐⭐⭐ Moeilijk)',
  'Set 8: Vertrek & moed (⭐⭐⭐ Moeilijk)'
]

// Custom answer checking for reflexive verbs
function checkReflexiveAnswer(userAnswer: string, correctAnswer: string, question: any): boolean {
  // Normalize both answers - remove extra spaces, convert to lowercase
  const normalize = (str: string) => str.toLowerCase().trim().replace(/\s+/g, ' ')
  const normalizedUser = normalize(userAnswer)
  const normalizedCorrect = normalize(correctAnswer)
  
  // Check exact match first
  if (normalizedUser === normalizedCorrect) {
    return true
  }
  
  // For reflexive verbs, also accept variations without punctuation
  const removePunctuation = (str: string) => str.replace(/[.,;!?]/g, '').trim()
  const userNoPunct = removePunctuation(normalizedUser)
  const correctNoPunct = removePunctuation(normalizedCorrect)
  
  return userNoPunct === correctNoPunct
}

function getQuestionText(exercise: any): string {
  return exercise.dutch
}

function getAnswerText(exercise: any): string {
  return exercise.spanish
}

definePageMeta({
  title: 'Wederkerige Werkwoorden Quiz'
})
</script>
