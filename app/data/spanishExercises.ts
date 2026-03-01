// Spaanse werkwoorden data voor A1 niveau oefeningen
// Focus op sterke werkwoorden: ser, estar, hacer, ir, querer, poder, pedir, saber, tocar
// Georganiseerd in logische sets van 10 oefeningen

export interface SpanishExercise {
	id: number;
	dutch: string;
	spanish: string;
	verb: string;
}

export const spanishExercisesData: SpanishExercise[][] = [
  // Set 1: Ser en Estar (zijn - basis vormen)
  [
    {
      id: 1,
      dutch: "Ik ben student.",
      spanish: "Soy estudiante.",
      verb: "ser"
    },
    {
      id: 2,
      dutch: "Jij bent aardig.",
      spanish: "Eres amable.",
      verb: "ser"
    },
    {
      id: 3,
      dutch: "Hij is leraar.",
      spanish: "Él es profesor.",
      verb: "ser"
    },
    {
      id: 4,
      dutch: "Wij zijn vrienden.",
      spanish: "Somos amigos.",
      verb: "ser"
    },
    {
      id: 5,
      dutch: "Ik ben thuis.",
      spanish: "Estoy en casa.",
      verb: "estar"
    },
    {
      id: 6,
      dutch: "Jij bent moe.",
      spanish: "Estás cansado.",
      verb: "estar"
    },
    {
      id: 7,
      dutch: "Ze is in de keuken.",
      spanish: "Ella está en la cocina.",
      verb: "estar"
    },
    {
      id: 8,
      dutch: "Wij zijn blij.",
      spanish: "Estamos contentos.",
      verb: "estar"
    },
    {
      id: 9,
      dutch: "Zij zijn leraren.",
      spanish: "Ellos son profesores.",
      verb: "ser"
    },
    {
      id: 10,
      dutch: "Jullie zijn hier.",
      spanish: "Estáis aquí.",
      verb: "estar"
    }
  ],
  
  // Set 2: Hacer en Ir (doen/maken en gaan)
  [
    {
      id: 11,
      dutch: "Ik doe huiswerk.",
      spanish: "Hago deberes.",
      verb: "hacer"
    },
    {
      id: 12,
      dutch: "Jij maakt eten.",
      spanish: "Haces comida.",
      verb: "hacer"
    },
    {
      id: 13,
      dutch: "Hij doet de was.",
      spanish: "Él hace la colada.",
      verb: "hacer"
    },
    {
      id: 14,
      dutch: "Wij maken muziek.",
      spanish: "Hacemos música.",
      verb: "hacer"
    },
    {
      id: 15,
      dutch: "Ik ga naar school.",
      spanish: "Voy a la escuela.",
      verb: "ir"
    },
    {
      id: 16,
      dutch: "Jij gaat naar huis.",
      spanish: "Vas a casa.",
      verb: "ir"
    },
    {
      id: 17,
      dutch: "Zij gaat naar de winkel.",
      spanish: "Ella va a la tienda.",
      verb: "ir"
    },
    {
      id: 18,
      dutch: "Wij gaan naar de bibliotheek.",
      spanish: "Vamos a la biblioteca.",
      verb: "ir"
    },
    {
      id: 19,
      dutch: "Zij maken taarten.",
      spanish: "Ellas hacen pasteles.",
      verb: "hacer"
    },
    {
      id: 20,
      dutch: "Jullie gaan naar het park.",
      spanish: "Vosotros vais al parque.",
      verb: "ir"
    }
  ],

  // Set 3: Querer en Poder (willen en kunnen)
  [
    {
      id: 21,
      dutch: "Ik wil water.",
      spanish: "Quiero agua.",
      verb: "querer"
    },
    {
      id: 22,
      dutch: "Jij wilt koffie.",
      spanish: "Quieres café.",
      verb: "querer"
    },
    {
      id: 23,
      dutch: "Hij wil slapen.",
      spanish: "Él quiere dormir.",
      verb: "querer"
    },
    {
      id: 24,
      dutch: "Wij willen dansen.",
      spanish: "Queremos bailar.",
      verb: "querer"
    },
    {
      id: 25,
      dutch: "Ik kan zwemmen.",
      spanish: "Puedo nadar.",
      verb: "poder"
    },
    {
      id: 26,
      dutch: "Jij kunt rijden.",
      spanish: "Puedes conducir.",
      verb: "poder"
    },
    {
      id: 27,
      dutch: "Ze kan zingen.",
      spanish: "Ella puede cantar.",
      verb: "poder"
    },
    {
      id: 28,
      dutch: "Wij kunnen helpen.",
      spanish: "Podemos ayudar.",
      verb: "poder"
    },
    {
      id: 29,
      dutch: "Zij willen thee.",
      spanish: "Ellas quieren té.",
      verb: "querer"
    },
    {
      id: 30,
      dutch: "Jullie kunnen dansen.",
      spanish: "Vosotros podéis bailar.",
      verb: "poder"
    }
  ],

  // Set 4: Pedir en Saber (vragen/bestellen en weten)
  [
    {
      id: 31,
      dutch: "Ik vraag om hulp.",
      spanish: "Pido ayuda.",
      verb: "pedir"
    },
    {
      id: 32,
      dutch: "Jij bestelt pizza.",
      spanish: "Pides pizza.",
      verb: "pedir"
    },
    {
      id: 33,
      dutch: "Hij vraagt informatie.",
      spanish: "Él pide información.",
      verb: "pedir"
    },
    {
      id: 34,
      dutch: "Wij vragen om de rekening.",
      spanish: "Pedimos la cuenta.",
      verb: "pedir"
    },
    {
      id: 35,
      dutch: "Ik weet je naam.",
      spanish: "Sé tu nombre.",
      verb: "saber"
    },
    {
      id: 36,
      dutch: "Jij weet het antwoord.",
      spanish: "Sabes la respuesta.",
      verb: "saber"
    },
    {
      id: 37,
      dutch: "Zij weet Spaans.",
      spanish: "Ella sabe español.",
      verb: "saber"
    },
    {
      id: 38,
      dutch: "Wij weten de waarheid.",
      spanish: "Sabemos la verdad.",
      verb: "saber"
    },
    {
      id: 39,
      dutch: "Zij bestellen salades.",
      spanish: "Ellas piden ensaladas.",
      verb: "pedir"
    },
    {
      id: 40,
      dutch: "Jullie weten de weg.",
      spanish: "Vosotros sabéis el camino.",
      verb: "saber"
    }
  ],

  // Set 5: Tocar en gemengde oefeningen
  [
    {
      id: 41,
      dutch: "Ik speel piano.",
      spanish: "Toco el piano.",
      verb: "tocar"
    },
    {
      id: 42,
      dutch: "Jij speelt gitaar.",
      spanish: "Tocas la guitarra.",
      verb: "tocar"
    },
    {
      id: 43,
      dutch: "Hij raakt de muur aan.",
      spanish: "Él toca la pared.",
      verb: "tocar"
    },
    {
      id: 44,
      dutch: "Wij spelen muziek.",
      spanish: "Tocamos música.",
      verb: "tocar"
    },
    {
      id: 45,
      dutch: "Zij spelen viool.",
      spanish: "Ellas tocan el violín.",
      verb: "tocar"
    },
    {
      id: 46,
      dutch: "U bent heel vriendelijk.",
      spanish: "Usted es muy amable.",
      verb: "ser"
    },
    {
      id: 47,
      dutch: "Jullie zijn in de bibliotheek.",
      spanish: "Vosotros estáis en la biblioteca.",
      verb: "estar"
    },
    {
      id: 48,
      dutch: "U maakt het bed.",
      spanish: "Usted hace la cama.",
      verb: "hacer"
    },
    {
      id: 49,
      dutch: "Jullie gaan naar de markt.",
      spanish: "Vosotros vais al mercado.",
      verb: "ir"
    },
    {
      id: 50,
      dutch: "U wilt rust.",
      spanish: "Usted quiere descanso.",
      verb: "querer"
    }
  ]
];

// Deprecated: maintain backward compatibility
export const spanishExercises: SpanishExercise[] = spanishExercisesData.flat();
