<script setup lang="ts">
const module = "p-home";

definePageMeta({
  layout: false,
});

const moduleClasses = computed(() => ({
  [module]: true,
}));
</script>

<template>
  <div :class="moduleClasses">
      <div class="container">
        <div class="home-content">
          <h1 class="main-title">🇪🇸 Spaans Oefenen</h1>
          <p class="subtitle">
            Verbeter je Spaanse vaardigheden met onze interactieve quizzen
          </p>

          <div class="quiz-cards">
            <div class="quiz-card">
              <div class="card-icon">💪</div>
              <h3>Sterke Werkwoorden</h3>
              <p>
                Oefen alle persoonsvormen van belangrijke sterke werkwoorden
              </p>
              <NuxtLink to="/verbs" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>

            <div class="quiz-card">
              <div class="card-icon">📚</div>
              <h3>Vocabulaire</h3>
              <p>
                Test je kennis van A1-niveau woordenschat, dagen, maanden en
                getallen
              </p>
              <NuxtLink to="/vocabulary" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>

            <div class="quiz-card">
              <div class="card-icon">🏠</div>
              <h3>Naamwoorden</h3>
              <p>
                Oefen zelfstandige naamwoorden voor in en rond het huis met
                lidwoorden
              </p>
              <NuxtLink to="/naamwoorden" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>

            <div class="quiz-card">
              <div class="card-icon">🪞</div>
              <h3>Wederkerige Werkwoorden</h3>
              <p>
                Oefen reflexive verbs en voornaamwoorden voor dagelijkse
                activiteiten en routine
              </p>
              <NuxtLink to="/reflexive" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="features">
            <div class="feature">
              <span>succes furl!!!</span>
            </div>
          
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
$module: "p-home";

.#{$module} {
  .home-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  .main-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1f2937;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: #6b7280;
    margin-bottom: 3rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }

  .quiz-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      gap: 1.5rem;
    }
  }

  .quiz-card {
    background: white;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #f3f4f6;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    }

    @media (max-width: 768px) {
      padding: 2rem 1.5rem;
    }
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .quiz-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
    font-weight: 600;
  }

  .quiz-card p {
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .card-button {
    width: 100%;
    min-width: 200px;
  }

  .features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem;
    background: #f8fafc;
    border-radius: 12px;
    margin-top: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    }
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #374151;
    font-weight: 500;

    .feature-icon {
      font-size: 1.2rem;
    }
  }
}
</style>
