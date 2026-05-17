<template>
  <QuizTemplate
    :quiz-data="mensenData"
    :quiz-title="'Mensen Quiz'"
    :quiz-description="'Praat over mensen in het Spaans! Vertaal Nederlandse woorden over uiterlijk en familie naar het Spaans. Elke set bevat 10 woorden binnen een thema.'"
    :instructions="'Vertaal naar het Spaans (met lidwoord waar van toepassing)'"
    :placeholder="'bijv. el pelo rizado, el hermano, alto...'"
    :set-label="'Kies een set van 10 woorden:'"
    :set-options="setOptions"
  />
</template>

<script setup lang="ts">
// Mensen data - uiterlijk en familie, georganiseerd per thema
const mensenData = [
  // Set 1: Haartype en kapsel
  [
    { dutch: 'het krullende haar', spanish: 'el pelo rizado' },
    { dutch: 'het steile haar', spanish: 'el pelo liso' },
    { dutch: 'het golvende haar', spanish: 'el pelo ondulado' },
    { dutch: 'het korte haar', spanish: 'el pelo corto' },
    { dutch: 'het lange haar', spanish: 'el pelo largo' },
    { dutch: 'het halflange haar', spanish: 'el pelo media melena' },
    { dutch: 'kaal', spanish: 'calvo' },
    { dutch: 'de paardenstaart', spanish: 'la coleta' },
    { dutch: 'de vlecht', spanish: 'la trenza' },
    { dutch: 'de pony', spanish: 'el flequillo' }
  ],

  // Set 2: Haarkleur
  [
    { dutch: 'het blonde haar', spanish: 'el pelo rubio' },
    { dutch: 'het bruine haar', spanish: 'el pelo castaño' },
    { dutch: 'het zwarte haar', spanish: 'el pelo negro' },
    { dutch: 'het rode haar', spanish: 'el pelo pelirrojo' },
    { dutch: 'het grijze haar', spanish: 'el pelo canoso' },
    { dutch: 'het witte haar', spanish: 'el pelo blanco' },
    { dutch: 'het donkere haar', spanish: 'el pelo oscuro' },
    { dutch: 'het lichte haar', spanish: 'el pelo claro' },
    { dutch: 'het geverfde haar', spanish: 'el pelo teñido' },
    { dutch: 'het natuurlijke haar', spanish: 'el pelo natural' }
  ],

  // Set 3: Gezicht en details
  [
    { dutch: 'de baard', spanish: 'la barba' },
    { dutch: 'de snor', spanish: 'el bigote' },
    { dutch: 'de bakkebaarden', spanish: 'las patillas' },
    { dutch: 'de sproeten', spanish: 'las pecas' },
    { dutch: 'de moedervlek', spanish: 'el lunar' },
    { dutch: 'de rimpels', spanish: 'las arrugas' },
    { dutch: 'de bril', spanish: 'las gafas' },
    { dutch: 'de blauwe ogen', spanish: 'los ojos azules' },
    { dutch: 'de groene ogen', spanish: 'los ojos verdes' },
    { dutch: 'de bruine ogen', spanish: 'los ojos marrones' }
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
  ],

  // Set 5: Naaste familie
  [
    { dutch: 'vader', spanish: 'padre' },
    { dutch: 'moeder', spanish: 'madre' },
    { dutch: 'ouders', spanish: 'padres' },
    { dutch: 'broer', spanish: 'hermano' },
    { dutch: 'zus', spanish: 'hermana' },
    { dutch: 'zoon', spanish: 'hijo' },
    { dutch: 'dochter', spanish: 'hija' },
    { dutch: 'kinderen', spanish: 'hijos' },
    { dutch: 'echtgenoot', spanish: 'marido' },
    { dutch: 'echtgenote', spanish: 'esposa' }
  ],

  // Set 6: Grootouders, oom en tante
  [
    { dutch: 'opa', spanish: 'abuelo' },
    { dutch: 'oma', spanish: 'abuela' },
    { dutch: 'grootouders', spanish: 'abuelos' },
    { dutch: 'kleinzoon', spanish: 'nieto' },
    { dutch: 'kleindochter', spanish: 'nieta' },
    { dutch: 'kleinkinderen', spanish: 'nietos' },
    { dutch: 'oom', spanish: 'tío' },
    { dutch: 'tante', spanish: 'tía' },
    { dutch: 'neef (zoon van je oom of tante)', spanish: 'primo' },
    { dutch: 'nicht (dochter van je oom of tante)', spanish: 'prima' }
  ],

  // Set 7: Schoonfamilie en relaties
  [
    { dutch: 'schoonvader', spanish: 'suegro' },
    { dutch: 'schoonmoeder', spanish: 'suegra' },
    { dutch: 'schoonouders', spanish: 'suegros' },
    { dutch: 'schoonbroer', spanish: 'cuñado' },
    { dutch: 'schoonzus', spanish: 'cuñada' },
    { dutch: 'schoonzoon', spanish: 'yerno' },
    { dutch: 'schoondochter', spanish: 'nuera' },
    { dutch: 'neefje (zoon van je broer of zus)', spanish: 'sobrino' },
    { dutch: 'nichtje (dochter van je broer of zus)', spanish: 'sobrina' },
    { dutch: 'partner', spanish: 'pareja' }
  ]
]

const setOptions = [
  'Set 1: Haartype en kapsel',
  'Set 2: Haarkleur',
  'Set 3: Gezicht en details',
  'Set 4: Lichaamsbouw',
  'Set 5: Naaste familie',
  'Set 6: Grootouders, oom en tante',
  'Set 7: Schoonfamilie en relaties'
]
</script>
