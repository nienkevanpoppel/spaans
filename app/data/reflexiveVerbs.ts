// Wederkerige werkwoorden data voor Spaanse oefeningen
// Focus op veelvoorkomende reflexive verbs die belangrijk zijn voor dagelijks gebruik
// Elke set: 5 verschillende werkwoorden, elk 2x, evenredig verdeeld over 6 persoonvormen

export interface ReflexiveExercise {
  id: number
  dutch: string
  spanish: string
  infinitive: string
  reflexivePronoun: string
  pronoun: string // yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes
}

export const reflexiveVerbsData: ReflexiveExercise[][] = [
  // Set 1: lavarse, vestirse, levantarse, acostarse, despertarse
  [
    {
      id: 1,
      dutch: "Ik was me.",
      spanish: "Me lavo.",
      infinitive: "lavarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 2,
      dutch: "Jij kleedt je aan.",
      spanish: "Te vistes.",
      infinitive: "vestirse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 3,
      dutch: "Hij/zij staat op.",
      spanish: "Se levanta.",
      infinitive: "levantarse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 4,
      dutch: "Wij gaan naar bed.",
      spanish: "Nos acostamos.",
      infinitive: "acostarse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 5,
      dutch: "Jullie worden wakker.",
      spanish: "Os despertáis.",
      infinitive: "despertarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 6,
      dutch: "Zij wassen zich.",
      spanish: "Se lavan.",
      infinitive: "lavarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 7,
      dutch: "Jij staat op.",
      spanish: "Te levantas.",
      infinitive: "levantarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 8,
      dutch: "U gaat naar bed.",
      spanish: "Se acuesta.",
      infinitive: "acostarse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 9,
      dutch: "Ik kleed me aan.",
      spanish: "Me visto.",
      infinitive: "vestirse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 10,
      dutch: "Zij worden wakker.",
      spanish: "Se despiertan.",
      infinitive: "despertarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 2: peinarse, ducharse, afeitarse, prepararse, cambiar
  [
    {
      id: 11,
      dutch: "Ik kam me.",
      spanish: "Me peino.",
      infinitive: "peinarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 12,
      dutch: "Jij doucht.",
      spanish: "Te duchas.",
      infinitive: "ducharse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 13,
      dutch: "Hij/zij scheert zich.",
      spanish: "Se afeita.",
      infinitive: "afeitarse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 14,
      dutch: "Wij maken ons klaar.",
      spanish: "Nos preparamos.",
      infinitive: "prepararse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 15,
      dutch: "Jullie kleden jullie om.",
      spanish: "Os cambiáis.",
      infinitive: "cambiarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 16,
      dutch: "Zij kammen zich.",
      spanish: "Se peinan.",
      infinitive: "peinarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 17,
      dutch: "Jij scheert je.",
      spanish: "Te afeitas.",
      infinitive: "afeitarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 18,
      dutch: "U doucht.",
      spanish: "Se ducha.",
      infinitive: "ducharse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 19,
      dutch: "Ik kleed me om.",
      spanish: "Me cambio.",
      infinitive: "cambiarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 20,
      dutch: "Zij bereiden zich voor.",
      spanish: "Se preparan.",
      infinitive: "prepararse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 3: sentirse, acordarse, preocuparse, aburrirse, enamorarse
  [
    {
      id: 21,
      dutch: "Ik voel me goed.",
      spanish: "Me siento bien.",
      infinitive: "sentirse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 22,
      dutch: "Jij herinnert je.",
      spanish: "Te acuerdas.",
      infinitive: "acordarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 23,
      dutch: "Hij/zij maakt zich zorgen.",
      spanish: "Se preocupa.",
      infinitive: "preocuparse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 24,
      dutch: "Wij vervelen ons.",
      spanish: "Nos aburrimos.",
      infinitive: "aburrirse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 25,
      dutch: "Jullie verliefd op elkaar.",
      spanish: "Os enamoráis.",
      infinitive: "enamorarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 26,
      dutch: "Zij voelen zich slecht.",
      spanish: "Se sienten mal.",
      infinitive: "sentirse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 27,
      dutch: "Jij maakt je zorgen.",
      spanish: "Te preocupas.",
      infinitive: "preocuparse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 28,
      dutch: "U herinnert zich.",
      spanish: "Se acuerda.",
      infinitive: "acordarse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 29,
      dutch: "Ik verveel me.",
      spanish: "Me aburro.",
      infinitive: "aburrirse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 30,
      dutch: "Zij verliefd op elkaar.",
      spanish: "Se enamoran.",
      infinitive: "enamorarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 4: sentarse, moverse, caerse, acercarse, alejarse
  [
    {
      id: 31,
      dutch: "Ik ga zitten.",
      spanish: "Me siento.",
      infinitive: "sentarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 32,
      dutch: "Jij beweegt.",
      spanish: "Te mueves.",
      infinitive: "moverse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 33,
      dutch: "Hij/zij valt.",
      spanish: "Se cae.",
      infinitive: "caerse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 34,
      dutch: "Wij komen dichterbij.",
      spanish: "Nos acercamos.",
      infinitive: "acercarse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 35,
      dutch: "Jullie gaat weg.",
      spanish: "Os alejáis.",
      infinitive: "alejarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 36,
      dutch: "Zij gaan zitten.",
      spanish: "Se sientan.",
      infinitive: "sentarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 37,
      dutch: "Jij komt dichterbij.",
      spanish: "Te acercas.",
      infinitive: "acercarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 38,
      dutch: "U beweegt.",
      spanish: "Se mueve.",
      infinitive: "moverse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 39,
      dutch: "Ik gaat weg.",
      spanish: "Me alejo.",
      infinitive: "alejarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 40,
      dutch: "Zij vallen.",
      spanish: "Se caen.",
      infinitive: "caerse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 5: presentarse, portarse, disculparse, relajarse, concentrarse
  [
    {
      id: 41,
      dutch: "Ik stel me voor.",
      spanish: "Me presento.",
      infinitive: "presentarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 42,
      dutch: "Jij gedraagt je goed.",
      spanish: "Te portas bien.",
      infinitive: "portarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 43,
      dutch: "Hij/zij verontschuldigt zich.",
      spanish: "Se disculpa.",
      infinitive: "disculparse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 44,
      dutch: "Wij ontspannen ons.",
      spanish: "Nos relajamos.",
      infinitive: "relajarse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 45,
      dutch: "Jullie concentreren jullie.",
      spanish: "Os concentráis.",
      infinitive: "concentrarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 46,
      dutch: "Zij stellen zich voor.",
      spanish: "Se presentan.",
      infinitive: "presentarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 47,
      dutch: "Jij verontschuldigt je.",
      spanish: "Te disculpas.",
      infinitive: "disculparse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 48,
      dutch: "U gedraagt zich goed.",
      spanish: "Se porta bien.",
      infinitive: "portarse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 49,
      dutch: "Ik concentreer me.",
      spanish: "Me concentro.",
      infinitive: "concentrarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 50,
      dutch: "Zij ontspannen zich.",
      spanish: "Se relajan.",
      infinitive: "relajarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 6: equivocarse, quejarse, encontrarse, unirse, enojarse
  [
    {
      id: 51,
      dutch: "Ik vergis me.",
      spanish: "Me equivoco.",
      infinitive: "equivocarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 52,
      dutch: "Jij beklaagt je.",
      spanish: "Te quejas.",
      infinitive: "quejarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 53,
      dutch: "Hij/zij ontmoet elkaar.",
      spanish: "Se encuentra.",
      infinitive: "encontrarse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 54,
      dutch: "Wij voegen ons bij.",
      spanish: "Nos unimos.",
      infinitive: "unirse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 55,
      dutch: "Jullie worden boos.",
      spanish: "Os enojáis.",
      infinitive: "enojarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 56,
      dutch: "Zij vergissen zich.",
      spanish: "Se equivocan.",
      infinitive: "equivocarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 57,
      dutch: "Jij voegt je bij.",
      spanish: "Te unes.",
      infinitive: "unirse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 58,
      dutch: "U beklaagt zich.",
      spanish: "Se queja.",
      infinitive: "quejarse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 59,
      dutch: "Ik word boos.",
      spanish: "Me enojo.",
      infinitive: "enojarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 60,
      dutch: "Zij ontmoeten elkaar.",
      spanish: "Se encuentran.",
      infinitive: "encontrarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 7: divertirse, sorprenderse, calmarse, negarse, retirarse
  [
    {
      id: 61,
      dutch: "Ik heb plezier.",
      spanish: "Me divierto.",
      infinitive: "divertirse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 62,
      dutch: "Jij verbaasd jezelf.",
      spanish: "Te sorprendes.",
      infinitive: "sorprenderse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 63,
      dutch: "Hij/zij wordt kalm.",
      spanish: "Se calma.",
      infinitive: "calmarse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 64,
      dutch: "Wij weigeren.",
      spanish: "Nos negamos.",
      infinitive: "negarse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 65,
      dutch: "Jullie trekken je terug.",
      spanish: "Os retiráis.",
      infinitive: "retirarse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 66,
      dutch: "Zij hebben plezier.",
      spanish: "Se divierten.",
      infinitive: "divertirse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 67,
      dutch: "Jij weigert.",
      spanish: "Te niegas.",
      infinitive: "negarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 68,
      dutch: "U verbaasd jezelf.",
      spanish: "Se sorprende.",
      infinitive: "sorprenderse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 69,
      dutch: "Ik trek me terug.",
      spanish: "Me retiro.",
      infinitive: "retirarse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 70,
      dutch: "Zij kalmen zich.",
      spanish: "Se calman.",
      infinitive: "calmarse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ],

  // Set 8: irse, quedarse, esconderse, atreverse, ponerse
  [
    {
      id: 71,
      dutch: "Ik ga weg.",
      spanish: "Me voy.",
      infinitive: "irse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 72,
      dutch: "Jij blijft.",
      spanish: "Te quedas.",
      infinitive: "quedarse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 73,
      dutch: "Hij/zij verstopt zich.",
      spanish: "Se esconde.",
      infinitive: "esconderse",
      reflexivePronoun: "se",
      pronoun: "él/ella/usted"
    },
    {
      id: 74,
      dutch: "Wij durven.",
      spanish: "Nos atrevemos.",
      infinitive: "atreverse",
      reflexivePronoun: "nos",
      pronoun: "nosotros"
    },
    {
      id: 75,
      dutch: "Jullie worden nerveus.",
      spanish: "Os ponéis nerviosos/as.",
      infinitive: "ponerse",
      reflexivePronoun: "os",
      pronoun: "vosotros"
    },
    {
      id: 76,
      dutch: "Zij gaan weg.",
      spanish: "Se van.",
      infinitive: "irse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    },
    {
      id: 77,
      dutch: "Jij verstopt je.",
      spanish: "Te escondes.",
      infinitive: "esconderse",
      reflexivePronoun: "te",
      pronoun: "tú"
    },
    {
      id: 78,
      dutch: "U blijft.",
      spanish: "Se queda.",
      infinitive: "quedarse",
      reflexivePronoun: "se",
      pronoun: "usted"
    },
    {
      id: 79,
      dutch: "Ik durf.",
      spanish: "Me atrevo.",
      infinitive: "atreverse",
      reflexivePronoun: "me",
      pronoun: "yo"
    },
    {
      id: 80,
      dutch: "Zij worden nerveus.",
      spanish: "Se ponen nerviosos/as.",
      infinitive: "ponerse",
      reflexivePronoun: "se",
      pronoun: "ellos/ellas/ustedes"
    }
  ]
]
