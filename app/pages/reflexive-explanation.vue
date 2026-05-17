<template>
  <div class="explanation-container">
    <div class="back-button-container">
      <NuxtLink to="/" class="back-button">
        <span class="back-arrow">←</span>
        Terug naar home
      </NuxtLink>
    </div>

    <div class="container">
      <div class="explanation-content">
        <h1>🪞 Wederkerige Werkwoorden (Reflexive Verbs)</h1>

        <div class="section">
          <h2>Wat zijn wederkerige werkwoorden?</h2>
          <p>
            Wederkerige werkwoorden zijn werkwoorden waarbij het onderwerp de actie op zichzelf uitvoert.
            In het Nederlands zeggen we "ik was me" (ik was mijzelf), in het Spaans "me lavo".
          </p>
          <p>
            Het woord "reflexive" betekent dat de handeling op jezelf terugslaat - je voert de actie uit op jezelf.
          </p>
        </div>

        <div class="section">
          <h2>De reflexive pronouns (wederkerige voornaamwoorden)</h2>
          <p>Reflexive verbs gebruiken speciale voornaamwoorden:</p>
          <div class="table-wrapper">
            <table class="explanation-table">
              <thead>
                <tr>
                  <th>Persoon</th>
                  <th>Voornaamwoord</th>
                  <th>Voorbeeld</th>
                  <th>Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ik</td>
                  <td><strong>me</strong></td>
                  <td>Me lavo</td>
                  <td>Ik was me</td>
                </tr>
                <tr>
                  <td>Jij</td>
                  <td><strong>te</strong></td>
                  <td>Te lavas</td>
                  <td>Jij wast je</td>
                </tr>
                <tr>
                  <td>Hij/zij/u</td>
                  <td><strong>se</strong></td>
                  <td>Se lava</td>
                  <td>Hij/zij wast zich</td>
                </tr>
                <tr>
                  <td>Wij</td>
                  <td><strong>nos</strong></td>
                  <td>Nos lavamos</td>
                  <td>Wij wassen ons</td>
                </tr>
                <tr>
                  <td>Jullie</td>
                  <td><strong>os</strong></td>
                  <td>Os laváis</td>
                  <td>Jullie wassen jullie</td>
                </tr>
                <tr>
                  <td>Zij/u (formeel)</td>
                  <td><strong>se</strong></td>
                  <td>Se lavan</td>
                  <td>Zij wassen zich</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="section">
          <h2>Hoe gebruik je het reflexive pronoun?</h2>
          <p>
            Het reflexive pronoun komt altijd voor het werkwoord. Kijk naar deze voorbeelden met "lavarse" (zich wassen):
          </p>
          <div class="examples">
            <div class="example">
              <strong>Me lavo las manos</strong>
              <p>Ik was mijn handen (letterlijk: ik was me de handen)</p>
            </div>
            <div class="example">
              <strong>Te cepillas los dientes</strong>
              <p>Jij poets je tanden (letterlijk: jij poet je jezelf de tanden)</p>
            </div>
            <div class="example">
              <strong>Se despiertan a las 7</strong>
              <p>Zij worden wakker om 7 uur (letterlijk: zij wekken zich op om 7 uur)</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Veelvoorkomende reflexive verbs</h2>
          <div class="verb-list">
            <div class="verb-item">
              <strong>Lavarse</strong> - Zich wassen / Me lavo
            </div>
            <div class="verb-item">
              <strong>Vestirse</strong> - Zich aankleden / Me visto
            </div>
            <div class="verb-item">
              <strong>Levantarse</strong> - Opstaan / Me levanto
            </div>
            <div class="verb-item">
              <strong>Acostarse</strong> - Naar bed gaan / Me acuesto
            </div>
            <div class="verb-item">
              <strong>Despertarse</strong> - Wakker worden / Me despierto
            </div>
            <div class="verb-item">
              <strong>Sentirse</strong> - Zich voelen / Me siento
            </div>
            <div class="verb-item">
              <strong>Acordarse</strong> - Zich herinneren / Me acuerdo
            </div>
            <div class="verb-item">
              <strong>Enamorarse</strong> - Verliefd worden / Me enamoro
            </div>
            <div class="verb-item">
              <strong>Divertirse</strong> - Zich amuseren / Me divierto
            </div>
            <div class="verb-item">
              <strong>Preocuparse</strong> - Zich zorgen maken / Me preocupo
            </div>
          </div>
        </div>

        <div class="section">
          <h2>In de infinitief</h2>
          <p>
            In de infinitief vorm zie je het reflexive pronoun meestal aan het einde van het werkwoord:
          </p>
          <div class="examples">
            <div class="example">
              <strong>Levantarse</strong> (opstaan)
            </div>
            <div class="example">
              <strong>Lavarse</strong> (zich wassen)
            </div>
            <div class="example">
              <strong>Enamorarse</strong> (verliefd worden)
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Oefenen</h2>
          <p>
            Klik op "Wederkerige Werkwoorden Quiz" om je kennis van reflexive verbs te oefenen.
            Je krijgt Nederlandse zinnen die je naar het Spaans moet vertalen.
          </p>
          <NuxtLink to="/reflexive" class="cta-button">
            Start Reflexive Verbs Quiz →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

<style lang="scss" scoped>
.explanation-container {
  min-height: 100vh;
  background-color: #f9fafb;
}

.back-button-container {
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  &:hover {
    gap: 0.75rem;
  }

  .back-arrow {
    font-size: 1.25rem;
  }
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.explanation-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1f2937;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }
}

.section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
}

.table-wrapper {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.explanation-table {
  width: 100%;
  border-collapse: collapse;
  background: #f9fafb;
  border-radius: 8px;
  overflow: hidden;

  thead {
    background: #3b82f6;
    color: white;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  th {
    font-weight: 600;
  }

  tbody tr {
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: #f3f4f6;
    }
  }

  strong {
    color: #3b82f6;
    font-weight: 600;
  }
}

.examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.example {
  background: #f0f9ff;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 4px;

  strong {
    color: #1e40af;
    font-size: 1.05rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #555;
    font-size: 0.95rem;
  }
}

.verb-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.verb-item {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #3b82f6;

  strong {
    color: #3b82f6;
  }
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
}
</style>
