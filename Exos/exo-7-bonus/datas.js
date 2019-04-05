var jsonDatas = [
	{
		"type": "car",
		"items": [
			{
				"name": "Fiat Punto",
				"description": "Je suis une voiture",
				"price": 10000,
				"quantity": 2,
				"contact": {
					"lastName": "Dubois",
					"firstName": "Martin",
					"address": "1 Grande Rue 74000 Annecy"
				}
			},
			{
				"name": "Porsche 911",
				"description": "Je suis une belle voiture",
				"price": 80000,
				"quantity": 0,
				"contact": {
					"lastName": "Valoir",
					"firstName": "Sylvie",
					"address": "11 Rue de geneve 74100 Annecy"
				}
			},
			{
				"name": "Peugeot 205",
				"description": "Je suis une autre voiture",
				"price": 2000,
				"quantity": 2,
				"contact": {
					"lastName": "Miquel",
					"firstName": "Alex",
					"address": "100 Rue de rouen 76100 Canteleu"
				}
			}
		]
	},
	{
		"type": "house",
		"items": [
			{
				"name": "Villa sur la plage",
				"description": "Quelle belle vue",
				"price": 870000,
				"quantity": 1,
				"contact": {
					"lastName": "Oussin",
					"firstName": "Vincent",
					"address": "84 Rue de bonsecours 78200 Chatou"
				}
			},
			{
				"name": "Maison à la campagne",
				"description": "Vive le calme",
				"price": 170000,
				"quantity": 3,
				"contact": {
					"lastName": "dupon",
					"firstName": "kevin",
					"address": "54 Route de mezier 84000 Lens"
				}
			}
		]
	},
	{
		"type": "game",
		"items": [
			{
				"name": "Monopoly",
				"description": "",
				"price": 30,
				"quantity": 300,
				"contact": {
					"lastName": "Arvin",
					"firstName": "patricia",
					"address": "14 Route du bornan 55000 Monpelier"
				}
			}

		]
	},
	{
		"type": "videoGame",
		"items": [
			{
				"name": "Mario Bros",
				"description": "",
				"price": 30,
				"quantity": 200,
				"contact": {
					"lastName": "gege",
					"firstName": "lucas",
					"address": "27 Route du mornaz 66610 laval"
				}
			}
		]
	},
	{
		"type": "show",
		"items": [
			{
				"name": "Place VIP concert Metallica",
				"description": "",
				"price": 800,
				"quantity": 10,
				"contact": {
					"lastName": "Manigot",
					"firstName": "Sabine",
					"address": "25 route de baie netlle 97150 Marigot"
				}
			},
			{
				"name": "Entrée au parc Astérix",
				"description": "",
				"price": 30,
				"quantity": 200,
				"contact": {
					"lastName": "Marval",
					"firstName": "Margot",
					"address": "72 rue du renard 76100 Rouen"
				}
			}
		]
	},
	]
var typeProduit = { "car": "voiture", "house": "maison", "game": "jeu", "videoGame": "jeu vidéos", "show": "spéctacle" };