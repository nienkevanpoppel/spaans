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

// Reorder sets: put infinitief sets (index 10, 11) at the front
const transformedData = [
  originalData[10] || [], // Set 11: Infinitief - Dagelijkse activiteiten
  originalData[11] || [], // Set 12: Infinitief - Gevoelens en gedrag  
  originalData[0] || [],  // Set 1: Dagelijkse routine (me - ik)
  originalData[1] || [],  // Set 2: Dagelijkse routine (te - jij)
  originalData[2] || [],  // Set 3: Dagelijkse routine (se - hij/zij)
  originalData[3] || [],  // Set 4: Gevoelens en emoties
  originalData[4] || [],  // Set 5: Beweging en positie
  originalData[5] || [],  // Set 6: Sociale interacties
  originalData[6] || [],  // Set 7: Zelfzorg en gezondheid
  originalData[7] || [],  // Set 8: Gedrag en gewoontes
  originalData[8] || [],  // Set 9: Gemengde oefeningen (alle pronouns)
  originalData[9] || []   // Set 10: Uitdagende reflexive verbs
].filter(set => set.length > 0) // Filter out empty sets

const setOptions = [
  'Set 1: Infinitief - Dagelijkse activiteiten (⭐ Eenvoudig)',
  'Set 2: Infinitief - Gevoelens en gedrag (⭐ Eenvoudig)',
  'Set 3: Dagelijkse routine (me - ik) (⭐⭐ Gemiddeld)',
  'Set 4: Dagelijkse routine (te - jij) (⭐⭐ Gemiddeld)',
  'Set 5: Dagelijkse routine (se - hij/zij) (⭐⭐ Gemiddeld)',
  'Set 6: Gevoelens en emoties (⭐⭐ Gemiddeld)',
  'Set 7: Beweging en positie (⭐⭐ Gemiddeld)',
  'Set 8: Sociale interacties (⭐⭐⭐ Moeilijk)',
  'Set 9: Zelfzorg en gezondheid (⭐⭐⭐ Moeilijk)',
  'Set 10: Gedrag en gewoontes (⭐⭐⭐ Moeilijk)',
  'Set 11: Gemengde oefeningen (alle pronouns) (⭐⭐⭐⭐ Uitdagend)',
  'Set 12: Uitdagende reflexive verbs (⭐⭐⭐⭐ Uitdagend)'
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
  
  // For infinitief questions (Sets 11 & 12), also check if user provided the infinitive
  if (question.infinitive && normalizedUser === normalize(question.infinitive)) {
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
