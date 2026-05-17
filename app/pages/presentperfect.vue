<template>
  <QuizTemplate
    :quiz-data="transformedData"
    :quiz-title="'Present Perfect Quiz'"
    :quiz-description="'Oefen Spaanse Present Perfect (Pretérito Perfecto)! Deze voltooide tegenwoordige tijd druk je uit met he/has/ha/hemos/habéis/han + deelwoord (have/has + past participle). Leer acties uit te drukken die net hebben plaatsgevonden of onlangs zijn voltooid. Perfect voor A1/A2 niveau.'"
    :instructions="'Vertaal de Nederlandse zin naar het Spaans'"
    :placeholder="'bijv. he bebido...'"
    :set-label="'Kies een set van 10 zinnen:'"
    :set-options="setOptions"
    :custom-answer-check="checkPresentPerfectAnswer"
    :get-question-text="getQuestionText"
    :get-answer-text="getAnswerText"
  />
</template>

<script setup lang="ts">
import { presentPerfectData } from '~/data/presentPerfect'

// Transform data to match QuizTemplate interface
const transformedData = presentPerfectData.map(set => 
  set.map(exercise => ({
    dutch: exercise.dutch,
    spanish: exercise.spanish,
    infinitive: exercise.infinitive,
    participle: exercise.participle,
    pronoun: exercise.pronoun,
    haberForm: exercise.haberForm,
    id: exercise.id
  }))
)

const setOptions = [
  'Set 1: Reguliere werkwoorden (⭐ Eenvoudig)',
  'Set 2: Beweging & communicatie (⭐ Eenvoudig)',
  'Set 3: Leven & vertrekken (⭐⭐ Gemiddeld)',
  'Set 4: Onregelmatige werkwoorden (⭐⭐ Gemiddeld)',
  'Set 5: Plaatsen & zien (⭐⭐⭐ Moeilijk)',
  'Set 6: Herhaalde oefening (⭐⭐⭐ Moeilijk)',
  'Set 7: Spreken & begrijpen (⭐⭐⭐⭐ Uitdagend)',
  'Set 8: Vertrekken & delen (⭐⭐⭐⭐ Uitdagend)'
]

// Custom answer checking for present perfect
function checkPresentPerfectAnswer(userAnswer: string, correctAnswer: string, question: any): boolean {
  // Normalize both answers
  const normalize = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[.,;!?¿]/g, '')
  }
  
  const normalizedUser = normalize(userAnswer)
  const normalizedCorrect = normalize(correctAnswer)
  
  // Check for exact match first
  if (normalizedUser === normalizedCorrect) {
    return true
  }
  
  // Check if the main components are correct (haber form + EXACT participle)
  const userParts = normalizedUser.split(/\s+/)
  const correctHaberForm = question.haberForm?.toLowerCase() || ''
  const correctParticiple = question.participle?.toLowerCase() || ''
  
  // Check if it contains the correct haber form
  const hasHaberForm = userParts.some(part => 
    part === correctHaberForm || part.startsWith(correctHaberForm + ' ')
  )
  
  // Check if it contains the EXACT correct participle
  const hasExactParticiple = userParts.some(part => 
    part === correctParticiple
  )
  
  // If both key components are present with exact match, accept it
  if (hasHaberForm && hasExactParticiple && userParts.length >= 2) {
    return true
  }
  
  return false
}

function getQuestionText(question: any) {
  return question.dutch
}

function getAnswerText(question: any) {
  return question.spanish
}
</script>
