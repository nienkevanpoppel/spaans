// Spaanse Present Perfect (Pretérito Perfecto) oefeningen
// Voor A1/A2 niveau - focus op samengestelde perfectum vorm
// he/has/ha/hemos/habéis/han + participio (have/has + past participle)
// Met alle 6 persoonvervoegingen: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes
// Onderwerp komt ALLEEN voor in het Nederlands, NIET in het Spaans antwoord

export interface PastPerfectExercise {
	id: number;
	dutch: string;
	spanish: string;
	infinitive: string;
	participle: string;
	pronoun: string; // yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes
	haberForm: string; // he, has, ha, hemos, habéis, han
}

export const pastPerfectData: PastPerfectExercise[][] = [
	// Set 1: Reguliere werkwoorden (reservado, dejado, apuntado)
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
			dutch: "Wij hebben gereserveerd.",
			spanish: "hemos reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 5,
			dutch: "Jullie hebben achtergelaten.",
			spanish: "habéis dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 6,
			dutch: "Zij hebben opgemerkt.",
			spanish: "han apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 7,
			dutch: "Ik heb achtergelaten.",
			spanish: "he dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 8,
			dutch: "Jij hebt opgemerkt.",
			spanish: "has apuntado.",
			infinitive: "apuntar",
			participle: "apuntado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 9,
			dutch: "U heeft gereserveerd.",
			spanish: "ha reservado.",
			infinitive: "reservar",
			participle: "reservado",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 10,
			dutch: "Zij hebben achtergelaten.",
			spanish: "han dejado.",
			infinitive: "dejar",
			participle: "dejado",
			pronoun: "ellas",
			haberForm: "han"
		}
	],

	// Set 2: Drinken en eten (bebido, comido)
	[
		{
			id: 11,
			dutch: "Ik heb gedronken.",
			spanish: "he bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 12,
			dutch: "Jij hebt gegeten.",
			spanish: "has comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 13,
			dutch: "Hij heeft gedronken.",
			spanish: "ha bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 14,
			dutch: "Zij heeft gegeten.",
			spanish: "ha comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 15,
			dutch: "Wij hebben gedronken.",
			spanish: "hemos bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 16,
			dutch: "Jullie hebben gegeten.",
			spanish: "habéis comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 17,
			dutch: "Ik heb gegeten.",
			spanish: "he comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 18,
			dutch: "Jij hebt gedronken.",
			spanish: "has bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 19,
			dutch: "Zij hebben gegeten.",
			spanish: "han comido.",
			infinitive: "comer",
			participle: "comido",
			pronoun: "ustedes",
			haberForm: "han"
		},
		{
			id: 20,
			dutch: "U heeft gedronken.",
			spanish: "ha bebido.",
			infinitive: "beber",
			participle: "bebido",
			pronoun: "usted",
			haberForm: "ha"
		}
	],

	// Set 3: Beweging (venido, hablado, trabajado)
	[
		{
			id: 21,
			dutch: "Ik ben gekomen.",
			spanish: "he venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 22,
			dutch: "Jij hebt gesproken.",
			spanish: "has hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 23,
			dutch: "Hij heeft gewerkt.",
			spanish: "ha trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 24,
			dutch: "Zij is gekomen.",
			spanish: "ha venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 25,
			dutch: "Wij hebben gesproken.",
			spanish: "hemos hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 26,
			dutch: "Jullie hebben gewerkt.",
			spanish: "habéis trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 27,
			dutch: "Zij zijn gekomen.",
			spanish: "han venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 28,
			dutch: "U heeft gesproken.",
			spanish: "ha hablado.",
			infinitive: "hablar",
			participle: "hablado",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 29,
			dutch: "Ik heb gewerkt.",
			spanish: "he trabajado.",
			infinitive: "trabajar",
			participle: "trabajado",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 30,
			dutch: "Jij bent gekomen.",
			spanish: "has venido.",
			infinitive: "venir",
			participle: "venido",
			pronoun: "tú",
			haberForm: "has"
		}
	],

	// Set 4: Meer werkwoorden (leído, entendido, vivido, salido)
	[
		{
			id: 31,
			dutch: "Ik heb gelezen.",
			spanish: "he leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 32,
			dutch: "Jij hebt begrepen.",
			spanish: "has entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 33,
			dutch: "Hij heeft gewoond.",
			spanish: "ha vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 34,
			dutch: "Zij is vertrokken.",
			spanish: "ha salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 35,
			dutch: "Wij hebben gelezen.",
			spanish: "hemos leído.",
			infinitive: "leer",
			participle: "leído",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 36,
			dutch: "Jullie hebben begrepen.",
			spanish: "habéis entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 37,
			dutch: "Zij hebben gewoond.",
			spanish: "han vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 38,
			dutch: "U is vertrokken.",
			spanish: "ha salido.",
			infinitive: "salir",
			participle: "salido",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 39,
			dutch: "Ik heb begrepen.",
			spanish: "he entendido.",
			infinitive: "entender",
			participle: "entendido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 40,
			dutch: "Jij hebt gewoond.",
			spanish: "has vivido.",
			infinitive: "vivir",
			participle: "vivido",
			pronoun: "tú",
			haberForm: "has"
		}
	],

	// Set 5: Onregelmatige werkwoorden (compartido, ido, abierto)
	[
		{
			id: 41,
			dutch: "Ik heb gedeeld.",
			spanish: "he compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 42,
			dutch: "Jij bent gegaan.",
			spanish: "has ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 43,
			dutch: "Hij heeft geopend.",
			spanish: "ha abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 44,
			dutch: "Zij heeft gedeeld.",
			spanish: "ha compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 45,
			dutch: "Wij zijn gegaan.",
			spanish: "hemos ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 46,
			dutch: "Jullie hebben geopend.",
			spanish: "habéis abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 47,
			dutch: "Zij hebben gedeeld.",
			spanish: "han compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 48,
			dutch: "U bent gegaan.",
			spanish: "ha ido.",
			infinitive: "ir",
			participle: "ido",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 49,
			dutch: "Ik heb geopend.",
			spanish: "he abierto.",
			infinitive: "abrir",
			participle: "abierto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 50,
			dutch: "Jij hebt gedeeld.",
			spanish: "has compartido.",
			infinitive: "compartir",
			participle: "compartido",
			pronoun: "tú",
			haberForm: "has"
		}
	],

	// Set 6: Onregelmatige werkwoorden (dicho, cubierto, escrito)
	[
		{
			id: 51,
			dutch: "Ik heb gezegd.",
			spanish: "he dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 52,
			dutch: "Jij hebt bedekt.",
			spanish: "has cubierto.",
			infinitive: "cubrir",
			participle: "cubierto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 53,
			dutch: "Hij heeft geschreven.",
			spanish: "ha escrito.",
			infinitive: "escribir",
			participle: "escrito",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 54,
			dutch: "Zij heeft gezegd.",
			spanish: "ha dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 55,
			dutch: "Wij hebben bedekt.",
			spanish: "hemos cubierto.",
			infinitive: "cubrir",
			participle: "cubierto",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 56,
			dutch: "Jullie hebben geschreven.",
			spanish: "habéis escrito.",
			infinitive: "escribir",
			participle: "escrito",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 57,
			dutch: "Zij hebben gezegd.",
			spanish: "han dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 58,
			dutch: "U heeft bedekt.",
			spanish: "ha cubierto.",
			infinitive: "cubrir",
			participle: "cubierto",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 59,
			dutch: "Ik heb geschreven.",
			spanish: "he escrito.",
			infinitive: "escribir",
			participle: "escrito",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 60,
			dutch: "Jij hebt gezegd.",
			spanish: "has dicho.",
			infinitive: "decir",
			participle: "dicho",
			pronoun: "tú",
			haberForm: "has"
		}
	],

	// Set 7: Onregelmatige werkwoorden (hecho, muerto, puesto)
	[
		{
			id: 61,
			dutch: "Ik heb gemaakt.",
			spanish: "he hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 62,
			dutch: "Jij bent gestorven.",
			spanish: "has muerto.",
			infinitive: "morir",
			participle: "muerto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 63,
			dutch: "Hij heeft geplaatst.",
			spanish: "ha puesto.",
			infinitive: "poner",
			participle: "puesto",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 64,
			dutch: "Zij heeft gemaakt.",
			spanish: "ha hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 65,
			dutch: "Wij zijn gestorven.",
			spanish: "hemos muerto.",
			infinitive: "morir",
			participle: "muerto",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 66,
			dutch: "Jullie hebben geplaatst.",
			spanish: "habéis puesto.",
			infinitive: "poner",
			participle: "puesto",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 67,
			dutch: "Zij hebben gemaakt.",
			spanish: "han hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 68,
			dutch: "U bent gestorven.",
			spanish: "ha muerto.",
			infinitive: "morir",
			participle: "muerto",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 69,
			dutch: "Ik heb geplaatst.",
			spanish: "he puesto.",
			infinitive: "poner",
			participle: "puesto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 70,
			dutch: "Jij hebt gemaakt.",
			spanish: "has hecho.",
			infinitive: "hacer",
			participle: "hecho",
			pronoun: "tú",
			haberForm: "has"
		}
	],

	// Set 8: Onregelmatige werkwoorden (roto, visto, vuelto)
	[
		{
			id: 71,
			dutch: "Ik heb gebroken.",
			spanish: "he roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 72,
			dutch: "Jij hebt gezien.",
			spanish: "has visto.",
			infinitive: "ver",
			participle: "visto",
			pronoun: "tú",
			haberForm: "has"
		},
		{
			id: 73,
			dutch: "Hij is teruggekeerd.",
			spanish: "ha vuelto.",
			infinitive: "volver",
			participle: "vuelto",
			pronoun: "él",
			haberForm: "ha"
		},
		{
			id: 74,
			dutch: "Zij heeft gebroken.",
			spanish: "ha roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "ella",
			haberForm: "ha"
		},
		{
			id: 75,
			dutch: "Wij hebben gezien.",
			spanish: "hemos visto.",
			infinitive: "ver",
			participle: "visto",
			pronoun: "nosotros",
			haberForm: "hemos"
		},
		{
			id: 76,
			dutch: "Jullie zijn teruggekeerd.",
			spanish: "habéis vuelto.",
			infinitive: "volver",
			participle: "vuelto",
			pronoun: "vosotros",
			haberForm: "habéis"
		},
		{
			id: 77,
			dutch: "Zij hebben gebroken.",
			spanish: "han roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "ellos",
			haberForm: "han"
		},
		{
			id: 78,
			dutch: "U hebt gezien.",
			spanish: "ha visto.",
			infinitive: "ver",
			participle: "visto",
			pronoun: "usted",
			haberForm: "ha"
		},
		{
			id: 79,
			dutch: "Ik ben teruggekeerd.",
			spanish: "he vuelto.",
			infinitive: "volver",
			participle: "vuelto",
			pronoun: "yo",
			haberForm: "he"
		},
		{
			id: 80,
			dutch: "Jij hebt gebroken.",
			spanish: "has roto.",
			infinitive: "romper",
			participle: "roto",
			pronoun: "tú",
			haberForm: "has"
		}
	]
];
