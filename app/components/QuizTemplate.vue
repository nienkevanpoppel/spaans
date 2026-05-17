<template>
  <div class="quiz-container">
    <div class="back-button-container">
      <NuxtLink to="/" class="back-button">
        <span class="back-arrow">←</span>
        Terug naar home
      </NuxtLink>
    </div>
    <div class="container">
      <div v-if="!quizCompleted" class="quiz-exercise">
        <!-- Progress indicator -->
        <div class="progress-bar">
          <div class="progress-text">
            {{ statusText }}
          </div>
          <div v-if="isFirstRound" class="progress-visual">
            <div 
              class="progress-fill" 
              :style="{ width: `${((currentQuestionIndex + 1) / currentSetSize) * 100}%` }"
            />
          </div>
          <div v-else class="retry-indicator">
            <div class="retry-counter">{{ retryQuestionsRemaining }} van {{ retryQuestions.length }} fout beantwoorde vragen over</div>
          </div>
        </div>

        <!-- Exercise content -->
        <div v-if="currentQuestion" class="exercise-content">
          <h2 class="instructions">{{ instructions }}</h2>
          
          <div class="question-display">
            {{ getQuestionText(currentQuestion) }}
          </div>

          <div class="input-section">
            <form @submit.prevent="checkAnswer">
              <input
                ref="answerInput"
                v-model="userAnswer"
                type="text"
                :placeholder="placeholder"
                :disabled="showFeedback"
                class="answer-input"
                autocomplete="off"
              />
            </form>
          </div>

          <!-- Result section -->
          <div v-if="showFeedback" class="result-section">
            <div v-if="isCorrect" class="correct-result">
              Correct! 🎉
            </div>
            
            <div v-else class="incorrect-result">
              Helaas, dat is niet juist.
            </div>
            
            <div class="answer-reveal">
              Juiste antwoord: <strong>{{ getAnswerText(currentQuestion) }}</strong>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="action-buttons">
            <button 
              v-if="!showFeedback" 
              @click="checkAnswer"
              :disabled="!userAnswer.trim()"
              color="a"
            >
              Controleer
            </button>
            
            <button 
              v-if="showFeedback" 
              @click="nextQuestion"
              color="a"
            >
              {{ 
                (isFirstRound && currentQuestionIndex < currentSetSize - 1) || 
                (!isFirstRound && retryQuestionsRemaining > 1) 
                ? 'Volgende' : 'Resultaten' 
              }}
            </button>
          </div>
        </div>

        <div v-else class="quiz-start">
          <h2>{{ quizTitle }}</h2>
          <p>{{ quizDescription }}</p>
          
          <!-- Set selector -->
          <div class="set-selector">
            <label for="set-select">{{ setLabel }}</label>
            <select id="set-select" v-model="currentSetIndex" class="set-select">
              <option 
                v-for="(setInfo, index) in setOptions" 
                :key="index" 
                :value="index"
              >
                {{ setInfo }}
              </option>
            </select>
            <div class="random-set-button">
              <button @click="selectRandomSet" color="b">
                Willekeurige set
              </button>
            </div>
          </div>
          
          <button @click="startQuiz" color="a">
            Start Quiz
          </button>
        </div>
      </div>

      <!-- Quiz completion screen -->
      <div v-else class="quiz-completed">
        <h2>🎉 ¡Fantástico!</h2>
        <p class="final-score">
          Goed: {{ correctAnswersInSet }}/{{ currentSetSize }}
        </p>
        <div class="result-message">
          {{ getResultMessage() }}
        </div>
        <div class="completion-actions">
          <button @click="resetQuiz" color="a">
            Reset
          </button>
          <NuxtLink to="/" color="b">
            Terug naar home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface QuizItem {
  dutch: string
  spanish: string
  [key: string]: any
}

interface Props {
  quizData: QuizItem[][]
  quizTitle: string
  quizDescription: string
  instructions: string
  placeholder: string
  setLabel: string
  setOptions: string[]
  customAnswerCheck?: (userAnswer: string, correctAnswer: string, question: QuizItem) => boolean
  getQuestionText?: (question: QuizItem) => string
  getAnswerText?: (question: QuizItem) => string
}

const props = withDefaults(defineProps<Props>(), {
  customAnswerCheck: undefined,
  getQuestionText: (question: QuizItem) => question.dutch,
  getAnswerText: (question: QuizItem) => question.spanish
})

// Quiz state
const currentSetIndex = ref(0)
const currentQuestionIndex = ref(0)
const currentRetryQuestionIndex = ref(0)
const currentQuestion = ref<QuizItem | null>(null)
const userAnswer = ref('')
const showFeedback = ref(false)
const isCorrect = ref(false)
const quizCompleted = ref(false)

// Ref for input element
const answerInput = ref<HTMLInputElement | null>(null)

// Mastery tracking
const currentSetQuestions = ref<QuizItem[]>([])
const wrongQueue = ref<QuizItem[]>([])
const retryQuestions = ref<QuizItem[]>([])
const retryQuestionsCompleted = ref<Set<string>>(new Set())
const isFirstRound = ref(true)
const correctAnswersInSet = ref(0)
const totalQuestionsAnswered = ref(0)

// Computed properties
const totalSets = computed(() => props.quizData.length)
const currentSetSize = computed(() => currentSetQuestions.value.length)
const retryQuestionsRemaining = computed(() => retryQuestions.value.length - retryQuestionsCompleted.value.size)

// Status text
const statusText = computed(() => {
  if (isFirstRound.value) {
    return `Set ${currentSetIndex.value + 1}/${totalSets.value} - Ronde 1 - Vraag ${currentQuestionIndex.value + 1}/${currentSetSize.value}`
  } else {
    return `Set ${currentSetIndex.value + 1}/${totalSets.value} - Herhaling - Nog ${retryQuestionsRemaining.value} fout`
  }
})

// Shuffle function
function shuffleArray(array: QuizItem[]): QuizItem[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    const other = shuffled[j]
    if (temp && other) {
      shuffled[i] = other
      shuffled[j] = temp
    }
  }
  return shuffled
}

// Focus helper function
const focusInput = () => {
  nextTick(() => {
    if (answerInput.value && !showFeedback.value) {
      answerInput.value.focus()
    }
  })
}

// Set selection function
function selectRandomSet() {
  currentSetIndex.value = Math.floor(Math.random() * props.quizData.length)
}

function startQuiz() {
  // Use selected set instead of shuffling all questions
  const selectedSet = props.quizData[currentSetIndex.value]
  if (!selectedSet || selectedSet.length === 0) {
    console.error('Invalid set selected')
    return
  }
  
  currentSetQuestions.value = shuffleArray([...selectedSet])
  
  // Reset state
  currentQuestionIndex.value = 0
  currentRetryQuestionIndex.value = 0
  wrongQueue.value = []
  retryQuestions.value = []
  retryQuestionsCompleted.value = new Set()
  isFirstRound.value = true
  correctAnswersInSet.value = 0
  totalQuestionsAnswered.value = 0
  quizCompleted.value = false
  
  // Set first question
  currentQuestion.value = currentSetQuestions.value[0] || null
  userAnswer.value = ''
  showFeedback.value = false
  
  // Focus input after starting quiz
  focusInput()
}

function checkAnswer() {
  if (!userAnswer.value.trim() || !currentQuestion.value) return
  
  let correct = false
  
  if (props.customAnswerCheck) {
    correct = props.customAnswerCheck(userAnswer.value.trim(), currentQuestion.value.spanish, currentQuestion.value)
  } else {
    correct = userAnswer.value.toLowerCase().trim() === currentQuestion.value.spanish.toLowerCase()
  }
  
  isCorrect.value = correct
  showFeedback.value = true
  
  if (correct) {
    correctAnswersInSet.value++
    
    // If this was a retry question, mark it as completed
    if (!isFirstRound.value) {
      const questionKey = `${currentQuestion.value.dutch}-${currentQuestion.value.spanish}`
      retryQuestionsCompleted.value.add(questionKey)
    }
  } else {
    // Add to wrong queue if it's the first time we see this question wrong
    if (isFirstRound.value) {
      wrongQueue.value.push(currentQuestion.value)
    }
  }
  
  totalQuestionsAnswered.value++
}

function nextQuestion() {
  if (isFirstRound.value) {
    // First round logic
    if (currentQuestionIndex.value < currentSetQuestions.value.length - 1) {
      // Move to next question in first round
      currentQuestionIndex.value++
      currentQuestion.value = currentSetQuestions.value[currentQuestionIndex.value] || null
      userAnswer.value = ''
      showFeedback.value = false
      focusInput()
    } else {
      // End of first round
      if (wrongQueue.value.length > 0) {
        // Switch to retry round
        isFirstRound.value = false
        retryQuestions.value = shuffleArray([...wrongQueue.value])
        currentRetryQuestionIndex.value = 0
        currentQuestion.value = retryQuestions.value[0] || null
        userAnswer.value = ''
        showFeedback.value = false
        focusInput()
      } else {
        // No wrong answers, quiz completed
        quizCompleted.value = true
        currentQuestion.value = null
      }
    }
  } else {
    // Retry round logic
    // Get list of questions not yet completed
    const remainingQuestions = retryQuestions.value.filter((question) => {
      const questionKey = `${question.dutch}-${question.spanish}`
      return !retryQuestionsCompleted.value.has(questionKey)
    })
    
    if (remainingQuestions.length > 0) {
      // There are still incomplete questions - shuffle and start a new round
      retryQuestions.value = shuffleArray([...remainingQuestions])
      currentRetryQuestionIndex.value = 0
      currentQuestion.value = retryQuestions.value[0] || null
      userAnswer.value = ''
      showFeedback.value = false
      focusInput()
    } else {
      // All retry questions completed
      quizCompleted.value = true
      currentQuestion.value = null
    }
  }
}

function getResultMessage() {
  const accuracy = Math.round((correctAnswersInSet.value / currentSetSize.value) * 100)
  const efficiency = Math.round((currentSetSize.value / totalQuestionsAnswered.value) * 100)
  
  let message = `Je hebt alle ${currentSetSize.value} vragen gemeesterd! 🎉\n`
  message += `Nauwkeurigheid: ${accuracy}% - Efficiëntie: ${efficiency}%\n\n`
  
  if (efficiency >= 90) {
    message += 'Excellent! Je kende bijna alles al! 🌟'
  } else if (efficiency >= 70) {
    message += 'Goed gedaan! Je hebt de meeste vragen snel geleerd! 👍'
  } else if (efficiency >= 50) {
    message += 'Prima! Een beetje extra oefening heeft geholpen! 📚'
  } else {
    message += 'Goed volgehouden! Deze kennis is nu veel beter ingeslepen! 💪'
  }
  
  return message
}

function resetQuiz() {
  // Reset to set selection screen
  quizCompleted.value = false
  currentQuestion.value = null
  userAnswer.value = ''
  showFeedback.value = false
  currentQuestionIndex.value = 0
  currentRetryQuestionIndex.value = 0
  wrongQueue.value = []
  retryQuestions.value = []
  retryQuestionsCompleted.value = new Set()
  isFirstRound.value = true
  correctAnswersInSet.value = 0
  totalQuestionsAnswered.value = 0
}

// Handle keyboard input for better UX
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !showFeedback.value) {
    checkAnswer()
  } else if (event.key === "Enter" && showFeedback.value) {
    nextQuestion()
  }
}

// Add global keypress listener when component is mounted
onMounted(() => {
  document.addEventListener('keypress', handleKeyPress)
})

// Remove global keypress listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('keypress', handleKeyPress)
})
</script>

<style scoped>
/* Back button styling */
.back-button-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.back-arrow {
  font-size: 1.1rem;
  font-weight: bold;
}

.quiz-container {
  .quiz-exercise {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  .progress-bar {
    margin-bottom: 2rem;

    .progress-text {
      text-align: center;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #666;
    }

    .progress-visual {
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4ade80, #22c55e);
        transition: width 0.3s ease;
      }
    }
    
    .retry-indicator {
      text-align: center;
      
      .retry-counter {
        font-weight: 500;
        color: #dc2626;
        background-color: #fef2f2;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border-left: 4px solid #dc2626;
      }
    }
  }

  .exercise-content {
    text-align: center;

    .instructions {
      margin-bottom: 1.5rem;
      color: #374151;
      font-size: 1.2rem;
    }

    .question-display {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background-color: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .input-section {
      margin-bottom: 1.5rem;

      .answer-input {
        width: 100%;
        max-width: 400px;
        padding: 1rem;
        font-size: 1.1rem;
        border: 2px solid #d1d5db;
        border-radius: 8px;
        text-align: center;
        transition: border-color 0.2s ease;

        &:focus {
          outline: none;
          border-color: #3b82f6;
        }

        &:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
        }
      }
    }

    .result-section {
      margin: 1.5rem 0;

      .correct-result {
        color: #16a34a;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 1rem;
        background-color: #dcfce7;
        border-radius: 8px;
        border-left: 4px solid #16a34a;
      }

      .incorrect-result {
        color: #dc2626;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 1rem;
        background-color: #fef2f2;
        border-radius: 8px;
        border-left: 4px solid #dc2626;
      }

      .answer-reveal {
        color: #7c3aed;
        font-weight: 500;
        font-size: 1.1rem;
        padding: 1rem;
        background-color: #f3e8ff;
        border-radius: 8px;
        border-left: 4px solid #7c3aed;
        margin-top: 1rem;

        strong {
          display: block;
          margin-top: 0.5rem;
          font-size: 1.2rem;
        }
      }
    }

    .action-buttons {
      margin-top: 2rem;
      
      button {
        min-width: 140px;
      }
    }
  }

  .quiz-start {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding: 3rem 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    p {
      color: #6b7280;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .set-selector {
      margin: 2rem 0;
      
      label {
        display: block;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.5rem;
      }
      
      .set-select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        background-color: white;
        font-size: 1rem;
        color: #374151;
        cursor: pointer;
        transition: border-color 0.2s ease;
        
        &:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        &:hover {
          border-color: #d1d5db;
        }
      }
      
      .random-set-button {
        margin-top: 1rem;
        
        button {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          min-width: auto;
        }
      }
    }
  }

  .quiz-completed {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding: 3rem 2rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #16a34a;
    }

    .final-score {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #374151;
      font-weight: 500;
    }

    .result-message {
      color: #6b7280;
      font-size: 1.1rem;
      margin-bottom: 2rem;
      white-space: pre-line;
    }

    .completion-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      
      button, a {
        min-width: 160px;
      }
    }
  }
}
</style>