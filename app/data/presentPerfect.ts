// Spaanse Present Perfect (Pretérito Perfecto) oefeningen
// Voor A1/A2 niveau - focus op samengestelde perfectum vorm
// he/has/ha/hemos/habéis/han + participio (have/has + past participle)
// Met alle 6 persoonvervoegingen: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes
// Onderwerp komt ALLEEN voor in het Nederlands, NIET in het Spaans antwoord
// Elke set: 5 verschillende deelwoorden, elk 2x, evenredig verdeeld over de 6 werkwoordsvormen

export interface PastPerfectExercise {
	id: number;
	dutch: string;
	spanish: string;
	infinitive: string;
	participle: string;
	pronoun: string; // yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes
	haberForm: string; // he, has, ha, hemos, habéis, han
}

export const presentPerfectData: PastPerfectExercise[][] = [
	// Set 1: reservado, dejado, apuntado, bebido, comido
	[
		{
			id: 1,
			dutch: "Ik heb gereserveerd.",
			spanish: "he reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 2,
			dutch: "Jij hebt achtergelaten.",
			spanish: "has dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 3,
			dutch: "Hij heeft opgemerkt.",
			spanish: "ha apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 4,
			dutch: "Wij hebben gedronken.",
			spanish: "hemos bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 5,
			dutch: "Jullie hebben gegeten.",
			spanish: "habéis comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 6,
			dutch: "Zij hebben gereserveerd.",
			spanish: "han reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 7,
			dutch: "Jij hebt opgemerkt.",
			spanish: "has apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 8,
			dutch: "U heeft gedronken.",
			spanish: "ha bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 9,
			dutch: "Ik heb achtergelaten.",
			spanish: "he dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 10,
			dutch: "Zij hebben gegeten.",
			spanish: "han comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 2: venido, hablado, trabajado, leído, entendido
	[
		{
			id: 11,
			dutch: "Ik ben gekomen.",
			spanish: "he venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 12,
			dutch: "Jij hebt gesproken.",
			spanish: "has hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 13,
			dutch: "Hij heeft gewerkt.",
			spanish: "ha trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 14,
			dutch: "Wij hebben gelezen.",
			spanish: "hemos leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 15,
			dutch: "Jullie hebben begrepen.",
			spanish: "habéis entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 16,
			dutch: "Zij zijn gekomen.",
			spanish: "han venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 17,
			dutch: "Jij hebt gewerkt.",
			spanish: "has trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 18,
			dutch: "U heeft gelezen.",
			spanish: "ha leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 19,
			dutch: "Ik heb gesproken.",
			spanish: "he hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 20,
			dutch: "Zij hebben begrepen.",
			spanish: "han entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 3: vivido, salido, compartido, ido, abierto
	[
		{
			id: 21,
			dutch: "Ik heb gewoond.",
			spanish: "he vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 22,
			dutch: "Jij bent vertrokken.",
			spanish: "has salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 23,
			dutch: "Hij heeft gedeeld.",
			spanish: "ha compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 24,
			dutch: "Wij zijn gegaan.",
			spanish: "hemos ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 25,
			dutch: "Jullie hebben geopend.",
			spanish: "habéis abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 26,
			dutch: "Zij hebben gewoond.",
			spanish: "han vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 27,
			dutch: "Jij hebt geopend.",
			spanish: "has abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 28,
			dutch: "U bent gegaan.",
			spanish: "ha ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 29,
			dutch: "Ik heb gedeeld.",
			spanish: "he compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 30,
			dutch: "Zij zijn vertrokken.",
			spanish: "han salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 4: dicho, cubierto, escrito, hecho, muerto
	[
		{
			id: 31,
			dutch: "Ik heb gezegd.",
			spanish: "he dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 32,
			dutch: "Jij hebt bedekt.",
			spanish: "has cubierto.",
			infinitive: "cubrir",
			participle: "cubierto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 33,
			dutch: "Hij heeft geschreven.",
			spanish: "ha escrito.",
			infinitive: "escribir",
			participle: "escrito",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 34,
			dutch: "Wij hebben gemaakt.",
			spanish: "hemos hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 35,
			dutch: "Jullie zijn gestorven.",
			spanish: "habéis muerto.",
			infinitive: "morir",
			participle: "muerto",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 36,
			dutch: "Zij hebben gezegd.",
			spanish: "han dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 37,
			dutch: "Jij hebt geschreven.",
			spanish: "has escrito.",
			infinitive: "escribir",
			participle: "escrito",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 38,
			dutch: "U hebt bedekt.",
			spanish: "ha cubierto.",
			infinitive: "cubrir",
			participle: "cubierto",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 39,
			dutch: "Ik heb gemaakt.",
			spanish: "he hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 40,
			dutch: "Zij is gestorven.",
			spanish: "ha muerto.",
			infinitive: "morir",
			participle: "muerto",
			pronoun: "ellas",
			haberForm: "ha"
		}
	],

	// Set 5: puesto, roto, visto, vuelto, reservado
	[
		{
			id: 41,
			dutch: "Ik heb geplaatst.",
			spanish: "he puesto.",
			infinitive: "poner",
			participle: "puesto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 42,
			dutch: "Jij hebt gebroken.",
			spanish: "has roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 43,
			dutch: "Hij heeft gezien.",
			spanish: "ha visto.",
			infinitive: "ver",
			participle: "visto",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 44,
			dutch: "Wij zijn teruggekeerd.",
			spanish: "hemos vuelto.",
			infinitive: "volver",
			participle: "vuelto",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 45,
			dutch: "Jullie hebben gereserveerd.",
			spanish: "habéis reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 46,
			dutch: "Zij hebben geplaatst.",
			spanish: "han puesto.",
			infinitive: "poner",
			participle: "puesto",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 47,
			dutch: "Jij hebt gezien.",
			spanish: "has visto.",
			infinitive: "ver",
			participle: "visto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 48,
			dutch: "U bent teruggekeerd.",
			spanish: "ha vuelto.",
			infinitive: "volver",
			participle: "vuelto",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 49,
			dutch: "Ik heb gebroken.",
			spanish: "he roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 50,
			dutch: "Zij hebben gereserveerd.",
			spanish: "han reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 6: dejado, apuntado, comido, bebido, venido
	[
		{
			id: 51,
			dutch: "Ik heb achtergelaten.",
			spanish: "he dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 52,
			dutch: "Jij hebt opgemerkt.",
			spanish: "has apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 53,
			dutch: "Hij heeft gegeten.",
			spanish: "ha comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 54,
			dutch: "Wij hebben gedronken.",
			spanish: "hemos bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 55,
			dutch: "Jullie zijn gekomen.",
			spanish: "habéis venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 56,
			dutch: "Zij hebben achtergelaten.",
			spanish: "han dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 57,
			dutch: "Jij hebt gegeten.",
			spanish: "has comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 58,
			dutch: "U heeft opgemerkt.",
			spanish: "ha apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 59,
			dutch: "Ik heb gedronken.",
			spanish: "he bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 60,
			dutch: "Zij is gekomen.",
			spanish: "ha venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "ella",
			haberForm: "ha"
		}
	],

	// Set 7: hablado, trabajado, leído, entendido, vivido
	[
		{
			id: 61,
			dutch: "Ik heb gesproken.",
			spanish: "he hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 62,
			dutch: "Jij hebt gewerkt.",
			spanish: "has trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 63,
			dutch: "Hij heeft gelezen.",
			spanish: "ha leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 64,
			dutch: "Wij hebben begrepen.",
			spanish: "hemos entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 65,
			dutch: "Jullie hebben gewoond.",
			spanish: "habéis vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 66,
			dutch: "Zij hebben gesproken.",
			spanish: "han hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 67,
			dutch: "Jij hebt gelezen.",
			spanish: "has leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 68,
			dutch: "U heeft gewerkt.",
			spanish: "ha trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 69,
			dutch: "Ik heb begrepen.",
			spanish: "he entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 70,
			dutch: "Zij hebben gewoond.",
			spanish: "han vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 8: salido, compartido, ido, abierto, dicho
	[
		{
			id: 71,
			dutch: "Ik ben vertrokken.",
			spanish: "he salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 72,
			dutch: "Jij hebt gedeeld.",
			spanish: "has compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 73,
			dutch: "Hij is gegaan.",
			spanish: "ha ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 74,
			dutch: "Wij hebben geopend.",
			spanish: "hemos abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 75,
			dutch: "Jullie hebben gezegd.",
			spanish: "habéis dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 76,
			dutch: "Zij zijn vertrokken.",
			spanish: "han salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 77,
			dutch: "Jij hebt geopend.",
			spanish: "has abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 78,
			dutch: "U heeft gedeeld.",
			spanish: "ha compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 79,
			dutch: "Ik ben gegaan.",
			spanish: "he ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 80,
			dutch: "Zij hebben gezegd.",
			spanish: "han dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "ellas",
			haberForm: "han"
		}
	]
];
