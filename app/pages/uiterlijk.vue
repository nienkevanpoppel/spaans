<template>
  <QuizTemplate
    :quiz-data="uiterlijkData"
    :quiz-title="'Uiterlijk Quiz'"
    :quiz-description="'Beschrijf iemands uiterlijk in het Spaans! Vertaal Nederlandse woorden over haar, gezicht en lichaamsbouw naar het Spaans. Elke set bevat 10 woorden binnen een thema.'"
    :instructions="'Vertaal naar het Spaans (met lidwoord waar van toepassing)'"
    :placeholder="'bijv. el pelo rizado, alto...'"
    :set-label="'Kies een set van 10 woorden:'"
    :set-options="setOptions"
  />
</template>

<script setup lang="ts">
// Uiterlijk data - georganiseerd per thema
const uiterlijkData = [
  // Set 1: Haartype en kapsel
  [
    { dutch: 'krullend haar', spanish: 'el pelo rizado' },
    { dutch: 'steil haar', spanish: 'el pelo liso' },
    { dutch: 'golvend haar', spanish: 'el pelo ondulado' },
    { dutch: 'kort haar', spanish: 'el pelo corto' },
    { dutch: 'lang haar', spanish: 'el pelo largo' },
    { dutch: 'halflang haar', spanish: 'el pelo media melena' },
    { dutch: 'kaal', spanish: 'calvo' },
    { dutch: 'paardenstaart', spanish: 'la coleta' },
    { dutch: 'vlecht', spanish: 'la trenza' },
    { dutch: 'pony', spanish: 'el flequillo' }
  ],

  // Set 2: Haarkleur
  [
    { dutch: 'blond haar', spanish: 'el pelo rubio' },
    { dutch: 'bruin haar', spanish: 'el pelo castaño' },
    { dutch: 'zwart haar', spanish: 'el pelo negro' },
    { dutch: 'rood haar', spanish: 'el pelo pelirrojo' },
    { dutch: 'grijs haar', spanish: 'el pelo canoso' },
    { dutch: 'wit haar', spanish: 'el pelo blanco' },
    { dutch: 'donker haar', spanish: 'el pelo oscuro' },
    { dutch: 'licht haar', spanish: 'el pelo claro' },
    { dutch: 'geverfd haar', spanish: 'el pelo teñido' },
    { dutch: 'natuurlijk haar', spanish: 'el pelo natural' }
  ],

  // Set 3: Gezicht en details
  [
    { dutch: 'baard', spanish: 'la barba' },
    { dutch: 'snor', spanish: 'el bigote' },
    { dutch: 'bakkebaarden', spanish: 'las patillas' },
    { dutch: 'sproeten', spanish: 'las pecas' },
    { dutch: 'moedervlek', spanish: 'el lunar' },
    { dutch: 'rimpels', spanish: 'las arrugas' },
    { dutch: 'bril', spanish: 'las gafas' },
    { dutch: 'blauwe ogen', spanish: 'los ojos azules' },
    { dutch: 'groene ogen', spanish: 'los ojos verdes' },
    { dutch: 'bruine ogen', spanish: 'los ojos marrones' }
  ],

  // Set 4: Lichaamsbouw
  [
    { dutch: 'lang', spanish: 'alto' },
    { dutch: 'klein', spanish: 'bajo' },
    { dutch: 'dik', spanish: 'gordo' },
    { dutch: 'mager', spanish: 'delgado' },
    { dutch: 'dun', spanish: 'flaco' },
    { dutch: 'gespierd', spanish: 'musculoso' },
    { dutch: 'atletisch', spanish: 'atlético' },
    { dutch: 'sterk', spanish: 'fuerte' },
    { dutch: 'zwak', spanish: 'débil' },
    { dutch: 'slank', spanish: 'esbelto' }
  ]
]

const setOptions = [
  'Set 1: Haartype en kapsel',
  'Set 2: Haarkleur',
  'Set 3: Gezicht en details',
  'Set 4: Lichaamsbouw'
]
</script>
