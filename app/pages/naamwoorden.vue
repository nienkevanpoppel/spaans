<template>
  <QuizTemplate
    :quiz-data="nounsData"
    :quiz-title="'Naamwoorden Quiz'"
    :quiz-description="'Leer de juiste Spaanse lidwoorden! Vertaal Nederlandse naamwoorden naar het Spaans met het juiste lidwoord (el of la). Elke set bevat 10 logisch gegroepeerde naamwoorden.'"
    :instructions="'Vertaal naar het Spaans met het juiste lidwoord (el/la)'"
    :placeholder="'bijv. el perro, la casa...'"
    :set-label="'Kies een set van 10 naamwoorden:'"
    :set-options="setOptions"
  />
</template>

<script setup lang="ts">
// Nouns data - georganiseerd in logische sets
const nounsData = [
  // Set 1: Dieren
  [
    { dutch: 'hond', spanish: 'el perro' },
    { dutch: 'kat', spanish: 'el gato' },
    { dutch: 'paard', spanish: 'el caballo' },
    { dutch: 'koe', spanish: 'la vaca' },
    { dutch: 'vogel', spanish: 'el pájaro' },
    { dutch: 'vis', spanish: 'el pez' },
    { dutch: 'muis', spanish: 'el ratón' },
    { dutch: 'olifant', spanish: 'el elefante' },
    { dutch: 'leeuw', spanish: 'el león' },
    { dutch: 'tijger', spanish: 'el tigre' }
  ],
  
  // Set 2: Huisdieren en familieleden
  [
    { dutch: 'man', spanish: 'el hombre' },
    { dutch: 'vrouw', spanish: 'la mujer' },
    { dutch: 'kind', spanish: 'el niño' },
    { dutch: 'meisje', spanish: 'la niña' },
    { dutch: 'baby', spanish: 'el bebé' },
    { dutch: 'familie', spanish: 'la familia' },
    { dutch: 'vriend', spanish: 'el amigo' },
    { dutch: 'vriendin', spanish: 'la amiga' },
    { dutch: 'leraar', spanish: 'el profesor' },
    { dutch: 'lerares', spanish: 'la profesora' }
  ],
  
  // Set 3: Eten en drinken
  [
    { dutch: 'brood', spanish: 'el pan' },
    { dutch: 'melk', spanish: 'la leche' },
    { dutch: 'kaas', spanish: 'el queso' },
    { dutch: 'vlees', spanish: 'la carne' },
    { dutch: 'fruit', spanish: 'la fruta' },
    { dutch: 'appel', spanish: 'la manzana' },
    { dutch: 'banaan', spanish: 'el plátano' },
    { dutch: 'sinaasappel', spanish: 'la naranja' },
    { dutch: 'wijn', spanish: 'el vino' },
    { dutch: 'bier', spanish: 'la cerveza' }
  ],
  
  // Set 4: Huis en meubels
  [
    { dutch: 'huis', spanish: 'la casa' },
    { dutch: 'appartement', spanish: 'el apartamento' },
    { dutch: 'kamer', spanish: 'la habitación' },
    { dutch: 'keuken', spanish: 'la cocina' },
    { dutch: 'badkamer', spanish: 'el baño' },
    { dutch: 'bed', spanish: 'la cama' },
    { dutch: 'stoel', spanish: 'la silla' },
    { dutch: 'tafel', spanish: 'la mesa' },
    { dutch: 'bank', spanish: 'el sofá' },
    { dutch: 'kast', spanish: 'el armario' }
  ],
  
  // Set 5: Kleding
  [
    { dutch: 'shirt', spanish: 'la camisa' },
    { dutch: 'broek', spanish: 'el pantalón' },
    { dutch: 'jurk', spanish: 'el vestido' },
    { dutch: 'jas', spanish: 'la chaqueta' },
    { dutch: 'schoenen', spanish: 'los zapatos' },
    { dutch: 'sokken', spanish: 'los calcetines' },
    { dutch: 'hoed', spanish: 'el sombrero' },
    { dutch: 'handschoenen', spanish: 'los guantes' },
    { dutch: 'riem', spanish: 'el cinturón' },
    { dutch: 'tas', spanish: 'la bolsa' }
  ],
  
  // Set 6: Natuur en weer
  [
    { dutch: 'zon', spanish: 'el sol' },
    { dutch: 'maan', spanish: 'la luna' },
    { dutch: 'sterren', spanish: 'las estrellas' },
    { dutch: 'regen', spanish: 'la lluvia' },
    { dutch: 'sneeuw', spanish: 'la nieve' },
    { dutch: 'wind', spanish: 'el viento' },
    { dutch: 'zee', spanish: 'el mar' },
    { dutch: 'berg', spanish: 'la montaña' },
    { dutch: 'rivier', spanish: 'el río' },
    { dutch: 'boom', spanish: 'el árbol' }
  ],
  
  // Set 7: Transport
  [
    { dutch: 'auto', spanish: 'el coche' },
    { dutch: 'bus', spanish: 'el autobús' },
    { dutch: 'trein', spanish: 'el tren' },
    { dutch: 'vliegtuig', spanish: 'el avión' },
    { dutch: 'boot', spanish: 'el barco' },
    { dutch: 'fiets', spanish: 'la bicicleta' },
    { dutch: 'motor', spanish: 'la motocicleta' },
    { dutch: 'taxi', spanish: 'el taxi' },
    { dutch: 'metro', spanish: 'el metro' },
    { dutch: 'station', spanish: 'la estación' }
  ],
  
  // Set 8: School en werk
  [
    { dutch: 'school', spanish: 'la escuela' },
    { dutch: 'universiteit', spanish: 'la universidad' },
    { dutch: 'kantoor', spanish: 'la oficina' },
    { dutch: 'boek', spanish: 'el libro' },
    { dutch: 'pen', spanish: 'la pluma' },
    { dutch: 'potlood', spanish: 'el lápiz' },
    { dutch: 'papier', spanish: 'el papel' },
    { dutch: 'computer', spanish: 'la computadora' },
    { dutch: 'telefoon', spanish: 'el teléfono' },
    { dutch: 'brief', spanish: 'la carta' }
  ],
  
  // Set 9: Lichaam
  [
    { dutch: 'hoofd', spanish: 'la cabeza' },
    { dutch: 'oog', spanish: 'el ojo' },
    { dutch: 'neus', spanish: 'la nariz' },
    { dutch: 'mond', spanish: 'la boca' },
    { dutch: 'hand', spanish: 'la mano' },
    { dutch: 'voet', spanish: 'el pie' },
    { dutch: 'arm', spanish: 'el brazo' },
    { dutch: 'been', spanish: 'la pierna' },
    { dutch: 'hart', spanish: 'el corazón' },
    { dutch: 'rug', spanish: 'la espalda' }
  ],
  
  // Set 10: Stad en gebouwen
  [
    { dutch: 'stad', spanish: 'la ciudad' },
    { dutch: 'dorp', spanish: 'el pueblo' },
    { dutch: 'straat', spanish: 'la calle' },
    { dutch: 'park', spanish: 'el parque' },
    { dutch: 'winkel', spanish: 'la tienda' },
    { dutch: 'restaurant', spanish: 'el restaurante' },
    { dutch: 'hotel', spanish: 'el hotel' },
    { dutch: 'ziekenhuis', spanish: 'el hospital' },
    { dutch: 'kerk', spanish: 'la iglesia' },
    { dutch: 'museum', spanish: 'el museo' }
  ]
]

const setOptions = [
  'Set 1: Dieren',
  'Set 2: Huisdieren en familieleden',
  'Set 3: Eten en drinken',
  'Set 4: Huis en meubels',
  'Set 5: Kleding',
  'Set 6: Natuur en weer',
  'Set 7: Transport',
  'Set 8: School en werk',
  'Set 9: Lichaam',
  'Set 10: Stad en gebouwen'
]
</script>