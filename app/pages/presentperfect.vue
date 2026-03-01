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
  'Set 1: Reguliere werkwoorden (reservado, dejado, apuntado) (⭐ Eenvoudig)',
  'Set 2: Drinken en eten (bebido, comido) (⭐ Eenvoudig)',
  'Set 3: Beweging (venido, hablado, trabajado) (⭐⭐ Gemiddeld)',
  'Set 4: Meer werkwoorden (leído, entendido, vivido, salido) (⭐⭐ Gemiddeld)',
  'Set 5: Onregelmatig (compartido, ido, abierto) (⭐⭐⭐ Moeilijk)',
  'Set 6: Onregelmatig (dicho, cubierto, escrito) (⭐⭐⭐ Moeilijk)',
  'Set 7: Onregelmatig (hecho, muerto, puesto) (⭐⭐⭐⭐ Uitdagend)',
  'Set 8: Onregelmatig (roto, visto, vuelto) (⭐⭐⭐⭐ Uitdagend)'
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
  
  // Check if the main components are correct (haber form + participle)
  const userParts = normalizedUser.split(/\s+/)
  
  // Check if it contains the correct haber form and participle
  const hasHaberForm = userParts.some(part => 
    part.includes(question.haberForm?.toLowerCase() || '')
  )
  const hasParticiple = userParts.some(part => 
    part.includes(question.participle?.toLowerCase() || '')
  )
  
  // If both key components are present, accept it
  if (hasHaberForm && hasParticiple && userParts.length >= 2) {
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
