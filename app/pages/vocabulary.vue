<template>
  <QuizTemplate
    :quiz-data="vocabularyData"
    :quiz-title="'Vocabulaire Quiz'"
    :quiz-description="'Test je kennis van Spaanse vocabulaire! Vertaal Nederlandse woorden naar het Spaans met de juiste lidwoorden (el/la). Elke set bevat 10 logisch gegroepeerde woorden.'"
    :instructions="'Vertaal naar het Spaans (met lidwoord el/la waar van toepassing)'"
    :placeholder="'bijv. la mesa, el libro...'"
    :set-label="'Kies een set van 10 woorden:'"
    :set-options="setOptions"
  />
</template>

<script setup lang="ts">
// Vocabulary data - georganiseerd in logische sets
const vocabularyData = [
  // Set 1: Dagen van de week en maanden
  [
    { spanish: 'lunes', dutch: 'maandag' },
    { spanish: 'martes', dutch: 'dinsdag' },
    { spanish: 'miércoles', dutch: 'woensdag' },
    { spanish: 'jueves', dutch: 'donderdag' },
    { spanish: 'viernes', dutch: 'vrijdag' },
    { spanish: 'sábado', dutch: 'zaterdag' },
    { spanish: 'domingo', dutch: 'zondag' },
    { spanish: 'enero', dutch: 'januari' },
    { spanish: 'febrero', dutch: 'februari' },
    { spanish: 'marzo', dutch: 'maart' }
  ],
  
  // Set 2: Maanden (vervolg) en tijdsaanduidingen
  [
    { spanish: 'abril', dutch: 'april' },
    { spanish: 'mayo', dutch: 'mei' },
    { spanish: 'junio', dutch: 'juni' },
    { spanish: 'julio', dutch: 'juli' },
    { spanish: 'agosto', dutch: 'augustus' },
    { spanish: 'septiembre', dutch: 'september' },
    { spanish: 'octubre', dutch: 'oktober' },
    { spanish: 'noviembre', dutch: 'november' },
    { spanish: 'diciembre', dutch: 'december' },
    { spanish: 'hoy', dutch: 'vandaag' }
  ],
  
  // Set 3: Getallen 1-10
  [
    { spanish: 'uno', dutch: 'een' },
    { spanish: 'dos', dutch: 'twee' },
    { spanish: 'tres', dutch: 'drie' },
    { spanish: 'cuatro', dutch: 'vier' },
    { spanish: 'cinco', dutch: 'vijf' },
    { spanish: 'seis', dutch: 'zes' },
    { spanish: 'siete', dutch: 'zeven' },
    { spanish: 'ocho', dutch: 'acht' },
    { spanish: 'nueve', dutch: 'negen' },
    { spanish: 'diez', dutch: 'tien' }
  ],
  
  // Set 4: Getallen 11-20
  [
    { spanish: 'once', dutch: 'elf' },
    { spanish: 'doce', dutch: 'twaalf' },
    { spanish: 'trece', dutch: 'dertien' },
    { spanish: 'catorce', dutch: 'veertien' },
    { spanish: 'quince', dutch: 'vijftien' },
    { spanish: 'dieciséis', dutch: 'zestien' },
    { spanish: 'diecisiete', dutch: 'zeventien' },
    { spanish: 'dieciocho', dutch: 'achttien' },
    { spanish: 'diecinueve', dutch: 'negentien' },
    { spanish: 'veinte', dutch: 'twintig' }
  ],
  
  // Set 5: Kleuren
  [
    { spanish: 'rojo', dutch: 'rood' },
    { spanish: 'azul', dutch: 'blauw' },
    { spanish: 'verde', dutch: 'groen' },
    { spanish: 'amarillo', dutch: 'geel' },
    { spanish: 'negro', dutch: 'zwart' },
    { spanish: 'blanco', dutch: 'wit' },
    { spanish: 'gris', dutch: 'grijs' },
    { spanish: 'rosa', dutch: 'roze' },
    { spanish: 'naranja', dutch: 'oranje' },
    { spanish: 'morado', dutch: 'paars' }
  ],
  
  // Set 6: Familie
  [
    { spanish: 'padre', dutch: 'vader' },
    { spanish: 'madre', dutch: 'moeder' },
    { spanish: 'hermano', dutch: 'broer' },
    { spanish: 'hermana', dutch: 'zus' },
    { spanish: 'hijo', dutch: 'zoon' },
    { spanish: 'hija', dutch: 'dochter' },
    { spanish: 'abuelo', dutch: 'grootvader' },
    { spanish: 'abuela', dutch: 'grootmoeder' },
    { spanish: 'ayer', dutch: 'gisteren' },
    { spanish: 'mañana', dutch: 'morgen' }
  ],
  
  // Set 7: Tijd en huis
  [
    { spanish: 'el tiempo', dutch: 'tijd' },
    { spanish: 'el día', dutch: 'dag' },
    { spanish: 'la noche', dutch: 'nacht' },
    { spanish: 'la mañana', dutch: 'ochtend' },
    { spanish: 'la tarde', dutch: 'middag' },
    { spanish: 'el año', dutch: 'jaar' },
    { spanish: 'el mes', dutch: 'maand' },
    { spanish: 'la semana', dutch: 'week' },
    { spanish: 'la hora', dutch: 'uur' },
    { spanish: 'la casa', dutch: 'huis' }
  ],
  
  // Set 8: Huis en objecten
  [
    { spanish: 'el agua', dutch: 'water' },
    { spanish: 'la comida', dutch: 'eten' },
    { spanish: 'el minuto', dutch: 'minuut' },
    { spanish: 'el segundo', dutch: 'seconde' },
    { spanish: 'el libro', dutch: 'boek' },
    { spanish: 'la mesa', dutch: 'tafel' },
    { spanish: 'la silla', dutch: 'stoel' },
    { spanish: 'la puerta', dutch: 'deur' },
    { spanish: 'la ventana', dutch: 'raam' },
    { spanish: 'el coche', dutch: 'auto' }
  ],
  
  // Set 9: Werk en openbare plaatsen
  [
    { spanish: 'el trabajo', dutch: 'het werk' },
    { spanish: 'la escuela', dutch: 'de school' },
    { spanish: 'el hospital', dutch: 'het ziekenhuis' },
    { spanish: 'la tienda', dutch: 'de winkel' },
    { spanish: 'el restaurante', dutch: 'het restaurant' },
    { spanish: 'treinta', dutch: 'dertig' },
    { spanish: 'cuarenta', dutch: 'veertig' },
    { spanish: 'cincuenta', dutch: 'vijftig' },
    { spanish: 'sesenta', dutch: 'zestig' },
    { spanish: 'setenta', dutch: 'zeventig' }
  ],
  
  // Set 10: Grote getallen
  [
    { spanish: 'ochenta', dutch: 'tachtig' },
    { spanish: 'noventa', dutch: 'negentig' },
    { spanish: 'cien', dutch: 'honderd' },
    { spanish: 'uno', dutch: 'een' },
    { spanish: 'dos', dutch: 'twee' },
    { spanish: 'tres', dutch: 'drie' },
    { spanish: 'cuatro', dutch: 'vier' },
    { spanish: 'cinco', dutch: 'vijf' },
    { spanish: 'seis', dutch: 'zes' },
    { spanish: 'siete', dutch: 'zeven' }
  ]
]

const setOptions = [
  'Set 1: Dagen van de week en maanden',
  'Set 2: Maanden (vervolg) en tijdsaanduidingen',
  'Set 3: Getallen 1-10',
  'Set 4: Getallen 11-20',
  'Set 5: Kleuren',
  'Set 6: Familie',
  'Set 7: Tijd en huis',
  'Set 8: Huis en objecten',
  'Set 9: Werk en openbare plaatsen',
  'Set 10: Grote getallen'
]
</script>