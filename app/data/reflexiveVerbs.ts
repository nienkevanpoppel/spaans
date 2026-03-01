// Wederkerige werkwoorden data voor Spaanse oefeningen
// Focus op veelvoorkomende reflexive verbs die belangrijk zijn voor dagelijks gebruik

export interface ReflexiveExercise {
  id: number
  dutch: string
  spanish: string
  infinitive: string
  reflexivePronoun: string
}

export const reflexiveVerbsData: ReflexiveExercise[][] = [
  // Set 1: Dagelijkse routine (me - ik)
  [
    {
      id: 1,
      dutch: "Ik was me.",
      spanish: "Me lavo.",
      infinitive: "lavarse",
      reflexivePronoun: "me"
    },
    {
      id: 2,
      dutch: "Ik kleed me aan.",
      spanish: "Me visto.",
      infinitive: "vestirse",
      reflexivePronoun: "me"
    },
    {
      id: 3,
      dutch: "Ik poets mijn tanden.",
      spanish: "Me lavo los dientes.",
      infinitive: "lavarse",
      reflexivePronoun: "me"
    },
    {
      id: 4,
      dutch: "Ik kam me.",
      spanish: "Me peino.",
      infinitive: "peinarse",
      reflexivePronoun: "me"
    },
    {
      id: 5,
      dutch: "Ik sta op.",
      spanish: "Me levanto.",
      infinitive: "levantarse",
      reflexivePronoun: "me"
    },
    {
      id: 6,
      dutch: "Ik ga naar bed.",
      spanish: "Me acuesto.",
      infinitive: "acostarse",
      reflexivePronoun: "me"
    },
    {
      id: 7,
      dutch: "Ik douche.",
      spanish: "Me ducho.",
      infinitive: "ducharse",
      reflexivePronoun: "me"
    },
    {
      id: 8,
      dutch: "Ik scheer me.",
      spanish: "Me afeito.",
      infinitive: "afeitarse",
      reflexivePronoun: "me"
    },
    {
      id: 9,
      dutch: "Ik maak me klaar.",
      spanish: "Me preparo.",
      infinitive: "prepararse",
      reflexivePronoun: "me"
    },
    {
      id: 10,
      dutch: "Ik word wakker.",
      spanish: "Me despierto.",
      infinitive: "despertarse",
      reflexivePronoun: "me"
    }
  ],

  // Set 2: Dagelijkse routine (te - jij)
  [
    {
      id: 11,
      dutch: "Jij wast je.",
      spanish: "Te lavas.",
      infinitive: "lavarse",
      reflexivePronoun: "te"
    },
    {
      id: 12,
      dutch: "Jij kleedt je aan.",
      spanish: "Te vistes.",
      infinitive: "vestirse",
      reflexivePronoun: "te"
    },
    {
      id: 13,
      dutch: "Jij poets je tanden.",
      spanish: "Te lavas los dientes.",
      infinitive: "lavarse",
      reflexivePronoun: "te"
    },
    {
      id: 14,
      dutch: "Jij kamt je.",
      spanish: "Te peinas.",
      infinitive: "peinarse",
      reflexivePronoun: "te"
    },
    {
      id: 15,
      dutch: "Jij staat op.",
      spanish: "Te levantas.",
      infinitive: "levantarse",
      reflexivePronoun: "te"
    },
    {
      id: 16,
      dutch: "Jij gaat naar bed.",
      spanish: "Te acuestas.",
      infinitive: "acostarse",
      reflexivePronoun: "te"
    },
    {
      id: 17,
      dutch: "Jij doucht.",
      spanish: "Te duchas.",
      infinitive: "ducharse",
      reflexivePronoun: "te"
    },
    {
      id: 18,
      dutch: "Jij scheert je.",
      spanish: "Te afeitas.",
      infinitive: "afeitarse",
      reflexivePronoun: "te"
    },
    {
      id: 19,
      dutch: "Jij maakt je klaar.",
      spanish: "Te preparas.",
      infinitive: "prepararse",
      reflexivePronoun: "te"
    },
    {
      id: 20,
      dutch: "Jij wordt wakker.",
      spanish: "Te despiertas.",
      infinitive: "despertarse",
      reflexivePronoun: "te"
    }
  ],

  // Set 3: Emoties en gevoelens (me/te/se)
  [
    {
      id: 21,
      dutch: "Ik voel me goed.",
      spanish: "Me siento bien.",
      infinitive: "sentirse",
      reflexivePronoun: "me"
    },
    {
      id: 22,
      dutch: "Jij wordt boos.",
      spanish: "Te enojas.",
      infinitive: "enojarse",
      reflexivePronoun: "te"
    },
    {
      id: 23,
      dutch: "Hij/zij wordt verliefd.",
      spanish: "Se enamora.",
      infinitive: "enamorarse",
      reflexivePronoun: "se"
    },
    {
      id: 24,
      dutch: "Ik maak me zorgen.",
      spanish: "Me preocupo.",
      infinitive: "preocuparse",
      reflexivePronoun: "me"
    },
    {
      id: 25,
      dutch: "Jij verveel je.",
      spanish: "Te aburres.",
      infinitive: "aburrirse",
      reflexivePronoun: "te"
    },
    {
      id: 26,
      dutch: "Hij/zij wordt nerveus.",
      spanish: "Se pone nervioso/a.",
      infinitive: "ponerse",
      reflexivePronoun: "se"
    },
    {
      id: 27,
      dutch: "Ik herinner me.",
      spanish: "Me acuerdo.",
      infinitive: "acordarse",
      reflexivePronoun: "me"
    },
    {
      id: 28,
      dutch: "Jij voelt je slecht.",
      spanish: "Te sientes mal.",
      infinitive: "sentirse",
      reflexivePronoun: "te"
    },
    {
      id: 29,
      dutch: "Hij/zij wordt kalm.",
      spanish: "Se calma.",
      infinitive: "calmarse",
      reflexivePronoun: "se"
    },
    {
      id: 30,
      dutch: "Ik verbaas me.",
      spanish: "Me sorprendo.",
      infinitive: "sorprenderse",
      reflexivePronoun: "me"
    }
  ],

  // Set 4: Beweging en positie
  [
    {
      id: 31,
      dutch: "Ik ga zitten.",
      spanish: "Me siento.",
      infinitive: "sentarse",
      reflexivePronoun: "me"
    },
    {
      id: 32,
      dutch: "Jij beweegt.",
      spanish: "Te mueves.",
      infinitive: "moverse",
      reflexivePronoun: "te"
    },
    {
      id: 33,
      dutch: "Hij/zij valt.",
      spanish: "Se cae.",
      infinitive: "caerse",
      reflexivePronoun: "se"
    },
    {
      id: 34,
      dutch: "Ik draai me om.",
      spanish: "Me doy la vuelta.",
      infinitive: "darse la vuelta",
      reflexivePronoun: "me"
    },
    {
      id: 35,
      dutch: "Jij bukt.",
      spanish: "Te agachas.",
      infinitive: "agacharse",
      reflexivePronoun: "te"
    },
    {
      id: 36,
      dutch: "Hij/zij verstopt zich.",
      spanish: "Se esconde.",
      infinitive: "esconderse",
      reflexivePronoun: "se"
    },
    {
      id: 37,
      dutch: "Ik kom dichterbij.",
      spanish: "Me acerco.",
      infinitive: "acercarse",
      reflexivePronoun: "me"
    },
    {
      id: 38,
      dutch: "Jij gaat weg.",
      spanish: "Te alejas.",
      infinitive: "alejarse",
      reflexivePronoun: "te"
    },
    {
      id: 39,
      dutch: "Hij/zij stopt.",
      spanish: "Se para.",
      infinitive: "pararse",
      reflexivePronoun: "se"
    },
    {
      id: 40,
      dutch: "Ik rek me uit.",
      spanish: "Me estiro.",
      infinitive: "estirarse",
      reflexivePronoun: "me"
    }
  ],

  // Set 5: Sociale interacties
  [
    {
      id: 41,
      dutch: "Ik stel me voor.",
      spanish: "Me presento.",
      infinitive: "presentarse",
      reflexivePronoun: "me"
    },
    {
      id: 42,
      dutch: "Jij gedraagt je goed.",
      spanish: "Te portas bien.",
      infinitive: "portarse",
      reflexivePronoun: "te"
    },
    {
      id: 43,
      dutch: "Hij/zij verontschuldigt zich.",
      spanish: "Se disculpa.",
      infinitive: "disculparse",
      reflexivePronoun: "se"
    },
    {
      id: 44,
      dutch: "Ik ontspan me.",
      spanish: "Me relajo.",
      infinitive: "relajarse",
      reflexivePronoun: "me"
    },
    {
      id: 45,
      dutch: "Jij concentreert je.",
      spanish: "Te concentras.",
      infinitive: "concentrarse",
      reflexivePronoun: "te"
    },
    {
      id: 46,
      dutch: "Hij/zij beklaagt zich.",
      spanish: "Se queja.",
      infinitive: "quejarse",
      reflexivePronoun: "se"
    },
    {
      id: 47,
      dutch: "Ik vergis me.",
      spanish: "Me equivoco.",
      infinitive: "equivocarse",
      reflexivePronoun: "me"
    },
    {
      id: 48,
      dutch: "Jij geeft je over.",
      spanish: "Te rindes.",
      infinitive: "rendirse",
      reflexivePronoun: "te"
    },
    {
      id: 49,
      dutch: "Hij/zij voegt zich bij ons.",
      spanish: "Se une a nosotros.",
      infinitive: "unirse",
      reflexivePronoun: "se"
    },
    {
      id: 50,
      dutch: "Ik communiceer.",
      spanish: "Me comunico.",
      infinitive: "comunicarse",
      reflexivePronoun: "me"
    }
  ],

  // Set 6: Wij en jullie vormen (nos/os)
  [
    {
      id: 51,
      dutch: "Wij wassen ons.",
      spanish: "Nos lavamos.",
      infinitive: "lavarse",
      reflexivePronoun: "nos"
    },
    {
      id: 52,
      dutch: "Jullie kleden jullie aan.",
      spanish: "Os vestís.",
      infinitive: "vestirse",
      reflexivePronoun: "os"
    },
    {
      id: 53,
      dutch: "Wij voelen ons goed.",
      spanish: "Nos sentimos bien.",
      infinitive: "sentirse",
      reflexivePronoun: "nos"
    },
    {
      id: 54,
      dutch: "Jullie maken jullie klaar.",
      spanish: "Os preparáis.",
      infinitive: "prepararse",
      reflexivePronoun: "os"
    },
    {
      id: 55,
      dutch: "Wij ontmoeten elkaar.",
      spanish: "Nos encontramos.",
      infinitive: "encontrarse",
      reflexivePronoun: "nos"
    },
    {
      id: 56,
      dutch: "Jullie herinneren jullie.",
      spanish: "Os acordáis.",
      infinitive: "acordarse",
      reflexivePronoun: "os"
    },
    {
      id: 57,
      dutch: "Wij gaan naar bed.",
      spanish: "Nos acostamos.",
      infinitive: "acostarse",
      reflexivePronoun: "nos"
    },
    {
      id: 58,
      dutch: "Jullie vervelen jullie.",
      spanish: "Os aburrís.",
      infinitive: "aburrirse",
      reflexivePronoun: "os"
    },
    {
      id: 59,
      dutch: "Wij verbazen ons.",
      spanish: "Nos sorprendemos.",
      infinitive: "sorprenderse",
      reflexivePronoun: "nos"
    },
    {
      id: 60,
      dutch: "Jullie concentreren jullie.",
      spanish: "Os concentráis.",
      infinitive: "concentrarse",
      reflexivePronoun: "os"
    }
  ],

  // Set 7: Zij vormen en algemene reflexieven
  [
    {
      id: 61,
      dutch: "Zij wassen zich.",
      spanish: "Se lavan.",
      infinitive: "lavarse",
      reflexivePronoun: "se"
    },
    {
      id: 62,
      dutch: "Zij kleden zich aan.",
      spanish: "Se visten.",
      infinitive: "vestirse",
      reflexivePronoun: "se"
    },
    {
      id: 63,
      dutch: "Zij voelen zich goed.",
      spanish: "Se sienten bien.",
      infinitive: "sentirse",
      reflexivePronoun: "se"
    },
    {
      id: 64,
      dutch: "Zij maken zich klaar.",
      spanish: "Se preparan.",
      infinitive: "prepararse",
      reflexivePronoun: "se"
    },
    {
      id: 65,
      dutch: "Zij worden wakker.",
      spanish: "Se despiertan.",
      infinitive: "despertarse",
      reflexivePronoun: "se"
    },
    {
      id: 66,
      dutch: "Zij gaan naar bed.",
      spanish: "Se acuestan.",
      infinitive: "acostarse",
      reflexivePronoun: "se"
    },
    {
      id: 67,
      dutch: "Zij herinneren zich.",
      spanish: "Se acuerdan.",
      infinitive: "acordarse",
      reflexivePronoun: "se"
    },
    {
      id: 68,
      dutch: "Zij vervelen zich.",
      spanish: "Se aburren.",
      infinitive: "aburrirse",
      reflexivePronoun: "se"
    },
    {
      id: 69,
      dutch: "Zij beklagen zich.",
      spanish: "Se quejan.",
      infinitive: "quejarse",
      reflexivePronoun: "se"
    },
    {
      id: 70,
      dutch: "Zij concentreren zich.",
      spanish: "Se concentran.",
      infinitive: "concentrarse",
      reflexivePronoun: "se"
    }
  ],

  // Set 8: Reflexieve werkwoorden met verandering (stem-changing)
  [
    {
      id: 71,
      dutch: "Ik ga naar bed.",
      spanish: "Me acuesto.",
      infinitive: "acostarse (o→ue)",
      reflexivePronoun: "me"
    },
    {
      id: 72,
      dutch: "Jij wordt wakker.",
      spanish: "Te despiertas.",
      infinitive: "despertarse (e→ie)",
      reflexivePronoun: "te"
    },
    {
      id: 73,
      dutch: "Hij/zij kleedt zich aan.",
      spanish: "Se viste.",
      infinitive: "vestirse (e→i)",
      reflexivePronoun: "se"
    },
    {
      id: 74,
      dutch: "Ik voel me.",
      spanish: "Me siento.",
      infinitive: "sentirse (e→ie)",
      reflexivePronoun: "me"
    },
    {
      id: 75,
      dutch: "Jij herhaalt jezelf.",
      spanish: "Te repites.",
      infinitive: "repetirse (e→i)",
      reflexivePronoun: "te"
    },
    {
      id: 76,
      dutch: "Hij/zij heeft plezier.",
      spanish: "Se divierte.",
      infinitive: "divertirse (e→ie)",
      reflexivePronoun: "se"
    },
    {
      id: 77,
      dutch: "Ik ga zitten.",
      spanish: "Me siento.",
      infinitive: "sentarse (e→ie)",
      reflexivePronoun: "me"
    },
    {
      id: 78,
      dutch: "Jij sterft.",
      spanish: "Te mueres.",
      infinitive: "morirse (o→ue)",
      reflexivePronoun: "te"
    },
    {
      id: 79,
      dutch: "Hij/zij lacht.",
      spanish: "Se ríe.",
      infinitive: "reírse (e→i)",
      reflexivePronoun: "se"
    },
    {
      id: 80,
      dutch: "Ik herhaal mezelf.",
      spanish: "Me repito.",
      infinitive: "repetirse (e→i)",
      reflexivePronoun: "me"
    }
  ],

  // Set 9: Reflexief met lichaamsdelen
  [
    {
      id: 81,
      dutch: "Ik was mijn handen.",
      spanish: "Me lavo las manos.",
      infinitive: "lavarse",
      reflexivePronoun: "me"
    },
    {
      id: 82,
      dutch: "Jij poets je tanden.",
      spanish: "Te lavas los dientes.",
      infinitive: "lavarse",
      reflexivePronoun: "te"
    },
    {
      id: 83,
      dutch: "Hij/zij kamt zijn/haar haar.",
      spanish: "Se peina el pelo.",
      infinitive: "peinarse",
      reflexivePronoun: "se"
    },
    {
      id: 84,
      dutch: "Ik was mijn gezicht.",
      spanish: "Me lavo la cara.",
      infinitive: "lavarse",
      reflexivePronoun: "me"
    },
    {
      id: 85,
      dutch: "Jij doet je ogen dicht.",
      spanish: "Te cierras los ojos.",
      infinitive: "cerrarse",
      reflexivePronoun: "te"
    },
    {
      id: 86,
      dutch: "Hij/zij wrijft zijn/haar handen.",
      spanish: "Se frota las manos.",
      infinitive: "frotarse",
      reflexivePronoun: "se"
    },
    {
      id: 87,
      dutch: "Ik krab mijn hoofd.",
      spanish: "Me rasco la cabeza.",
      infinitive: "rascarse",
      reflexivePronoun: "me"
    },
    {
      id: 88,
      dutch: "Jij rekt je armen uit.",
      spanish: "Te estiras los brazos.",
      infinitive: "estirarse",
      reflexivePronoun: "te"
    },
    {
      id: 89,
      dutch: "Hij/zij beet op zijn/haar nagels.",
      spanish: "Se muerde las uñas.",
      infinitive: "morderse",
      reflexivePronoun: "se"
    },
    {
      id: 90,
      dutch: "Ik droog mijn haar.",
      spanish: "Me seco el pelo.",
      infinitive: "secarse",
      reflexivePronoun: "me"
    }
  ],

  // Set 10: Gemengde moeilijke reflexieven
  [
    {
      id: 91,
      dutch: "Ik realiseer me.",
      spanish: "Me doy cuenta.",
      infinitive: "darse cuenta",
      reflexivePronoun: "me"
    },
    {
      id: 92,
      dutch: "Jij maakt je geen zorgen.",
      spanish: "No te preocupes.",
      infinitive: "preocuparse",
      reflexivePronoun: "te"
    },
    {
      id: 93,
      dutch: "Hij/zij gedraagt zich slecht.",
      spanish: "Se porta mal.",
      infinitive: "portarse",
      reflexivePronoun: "se"
    },
    {
      id: 94,
      dutch: "Ik trek me terug.",
      spanish: "Me retiro.",
      infinitive: "retirarse",
      reflexivePronoun: "me"
    },
    {
      id: 95,
      dutch: "Jij voegt je bij de groep.",
      spanish: "Te unes al grupo.",
      infinitive: "unirse",
      reflexivePronoun: "te"
    },
    {
      id: 96,
      dutch: "Hij/zij weigert.",
      spanish: "Se niega.",
      infinitive: "negarse",
      reflexivePronoun: "se"
    },
    {
      id: 97,
      dutch: "Ik doe alsof.",
      spanish: "Me hago el tonto.",
      infinitive: "hacerse",
      reflexivePronoun: "me"
    },
    {
      id: 98,
      dutch: "Jij bent verantwoordelijk voor.",
      spanish: "Te encargas de.",
      infinitive: "encargarse",
      reflexivePronoun: "te"
    },
    {
      id: 99,
      dutch: "Hij/zij bekommert zich om.",
      spanish: "Se ocupa de.",
      infinitive: "ocuparse",
      reflexivePronoun: "se"
    },
    {
      id: 100,
      dutch: "Ik betrouw op.",
      spanish: "Me fío de.",
      infinitive: "fiarse",
      reflexivePronoun: "me"
    }
  ],

  // Set 11: Infinitief oefeningen - Dagelijkse activiteiten
  [
    {
      id: 101,
      dutch: "wassen",
      spanish: "lavarse",
      infinitive: "lavarse",
      reflexivePronoun: ""
    },
    {
      id: 102,
      dutch: "aankleden",
      spanish: "vestirse",
      infinitive: "vestirse",
      reflexivePronoun: ""
    },
    {
      id: 103,
      dutch: "kammen",
      spanish: "peinarse",
      infinitive: "peinarse",
      reflexivePronoun: ""
    },
    {
      id: 104,
      dutch: "opstaan",
      spanish: "levantarse",
      infinitive: "levantarse",
      reflexivePronoun: ""
    },
    {
      id: 105,
      dutch: "naar bed gaan",
      spanish: "acostarse",
      infinitive: "acostarse",
      reflexivePronoun: ""
    },
    {
      id: 106,
      dutch: "douchen",
      spanish: "ducharse",
      infinitive: "ducharse",
      reflexivePronoun: ""
    },
    {
      id: 107,
      dutch: "wakker worden",
      spanish: "despertarse",
      infinitive: "despertarse",
      reflexivePronoun: ""
    },
    {
      id: 108,
      dutch: "scheren",
      spanish: "afeitarse",
      infinitive: "afeitarse",
      reflexivePronoun: ""
    },
    {
      id: 109,
      dutch: "klaarmaken",
      spanish: "prepararse",
      infinitive: "prepararse",
      reflexivePronoun: ""
    },
    {
      id: 110,
      dutch: "omkleden",
      spanish: "cambiarse",
      infinitive: "cambiarse",
      reflexivePronoun: ""
    }
  ],

  // Set 12: Infinitief oefeningen - Gevoelens en gedrag
  [
    {
      id: 111,
      dutch: "voelen",
      spanish: "sentirse",
      infinitive: "sentirse",
      reflexivePronoun: ""
    },
    {
      id: 112,
      dutch: "zich zorgen maken",
      spanish: "preocuparse",
      infinitive: "preocuparse",
      reflexivePronoun: ""
    },
    {
      id: 113,
      dutch: "verliefd worden",
      spanish: "enamorarse",
      infinitive: "enamorarse",
      reflexivePronoun: ""
    },
    {
      id: 114,
      dutch: "vergissen",
      spanish: "equivocarse",
      infinitive: "equivocarse",
      reflexivePronoun: ""
    },
    {
      id: 115,
      dutch: "herinneren",
      spanish: "acordarse",
      infinitive: "acordarse",
      reflexivePronoun: ""
    },
    {
      id: 116,
      dutch: "vervelen",
      spanish: "aburrirse",
      infinitive: "aburrirse",
      reflexivePronoun: ""
    },
    {
      id: 117,
      dutch: "weggaan",
      spanish: "irse",
      infinitive: "irse",
      reflexivePronoun: ""
    },
    {
      id: 118,
      dutch: "blijven",
      spanish: "quedarse",
      infinitive: "quedarse",
      reflexivePronoun: ""
    },
    {
      id: 119,
      dutch: "bewegen",
      spanish: "moverse",
      infinitive: "moverse",
      reflexivePronoun: ""
    },
    {
      id: 120,
      dutch: "gedragen",
      spanish: "comportarse",
      infinitive: "comportarse",
      reflexivePronoun: ""
    }
  ]
]
