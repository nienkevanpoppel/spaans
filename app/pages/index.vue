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
        <p class="subtitle">Verbeter je Spaanse vaardigheden met een quiz</p>

        <div class="quiz-cards">
          <div class="quiz-card">
            <h2>
              1. <br />
              Sterke Werkwoorden
            </h2>
            <p>Oefen alle vervoegingen van belangrijke sterke werkwoorden</p>
            <div class="card-buttons">
              <NuxtLink to="/verbs" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="quiz-card">
            <h2>
              2. <br />
              Vocabulaire
            </h2>
            <p>
              Test je kennis van A1-niveau woordenschat, dagen, maanden en
              getallen
            </p>
            <div class="card-buttons">
              <NuxtLink to="/vocabulary" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="quiz-card">
            <h2>
              3. <br />
              Naamwoorden
            </h2>
            <p>
              Oefen zelfstandige naamwoorden voor in en rond het huis met
              lidwoorden
            </p>
            <div class="card-buttons">
              <NuxtLink to="/naamwoorden" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="quiz-card">
            <h2>
              4. <br />
              Wederkerige Werkwoorden
            </h2>
            <p>
              Oefen reflexive verbs en voornaamwoorden voor dagelijkse
              activiteiten en routine
            </p>
            <div class="card-buttons">
              <NuxtLink to="/reflexive-explanation" color="b" class="card-button info-button">
                📖 Uitleg
              </NuxtLink>
              <NuxtLink to="/reflexive" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="quiz-card">
            <h2>
              5. <br />
              Present Perfect
            </h2>
            <p>
              Oefen de voltooide tegenwoordige tijd met
              he/has/ha/hemos/habéis/han + deelwoord
            </p>
            <div class="card-buttons">
              <NuxtLink to="/presentperfect-explanation" color="b" class="card-button info-button">
                📖 Uitleg
              </NuxtLink>
              <NuxtLink to="/presentperfect" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
          </div>

          <div class="quiz-card">
            <h2>
              6. <br />
              Uiterlijk
            </h2>
            <p>
              Beschrijf iemands uiterlijk: haartype, haarkleur, gezicht en
              lichaamsbouw
            </p>
            <div class="card-buttons">
              <NuxtLink to="/uiterlijk" color="a" class="card-button">
                Start Quiz
              </NuxtLink>
            </div>
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
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  .main-title {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
    color: #1f2937;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .subtitle {
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 2rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
    }
  }

  .quiz-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .quiz-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem 1.2rem;
    display: flex;
    flex-direction: column;
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
      padding: 1.5rem 1rem;
    }
  }

  .card-buttons {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .quiz-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    color: #1f2937;
    font-weight: 600;
  }

  .quiz-card p {
    color: #6b7280;
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .card-button {
    width: 100%;
    margin-top: auto;
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
