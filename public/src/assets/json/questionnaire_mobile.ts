export const QUESTIONNAIRE_MOBILE = {
	'section-1': {
		'title': 'Pédagogie & engagement utilisateur',
		'subtitle': 'Il existe des éléments d’accompagnement simples et agréables permettant de guider l’utilisateur tout au long de ses interactions avec l’application',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-1/question-1',
				'title': 'Il y a un tutoriel d’introduction si l’application le nécessite',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 3,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': false,
						'points': 1,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-2': {
				'id': 'section-1/question-2',
				'title': 'L’application offre des tutoriels spécialisés en fonction de l’utilisation de l’application',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 3,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': false,
						'points': 1,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-3': {
				'id': 'section-1/question-3',
				'title': 'Des bulles d’aide sont utilisé pour les éléments complexes',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 3,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-4',
						'expectedanswer': false,
						'points': 1,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-4': {
				'id': 'section-1/question-4',
				'title': 'L’utilisateur doit pouvoir configurer l’affichage des contenus en fonction de ses préférences',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-5',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-5': {
				'id': 'section-1/question-5',
				'title': 'Présence d’éléments de personnalisation implicite',
				'subtitle': 'prise en compte automatique des préférences de l’utilisateur pour la suggestion de contenu',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-6',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-6': {
				'id': 'section-1/question-6',
				'title': 'Une fois la configuration réalisée, l’utilisateur doit recevoir une confirmation attestant de la prise en compte de sa personnalisation',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-7',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-7': {
				'id': 'section-1/question-7',
				'title': 'Les éléments d’information portant sur les recherches précédentes sont affichées proactivement',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-8',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-8': {
				'id': 'section-1/question-8',
				'title': 'Suggestion basé sur l’utilisation.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-9',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-9': {
				'id': 'section-1/question-9',
				'title': 'L’intérêt de l’application est visible dès sa page de téléchargement',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-10',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-10',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-10',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-10': {
				'id': 'section-1/question-10',
				'title': 'Je peux commencer à utiliser l’application sans avoir à s’enregistrer (au moins un démos).',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-1',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			}
		}
	},
	'section-2': {
		'title': 'Pertinance de l’architecture de l’information',
		'subtitle': 'Organisation claire et structurée des éléments de l’application pour conduire et orienter l’utilisateur.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-2/question-1',
				'title': 'Les éléments / pages sont présentés de manière simple',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-2',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-2': {
				'id': 'section-2/question-2',
				'title': 'Le contenu de la page me permet de voir facilement que l’on peut scroller',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-3',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-3': {
				'id': 'section-2/question-3',
				'title': 'Le menu reste accessible tout au long du scroll',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-4',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-4': {
				'id': 'section-2/question-4',
				'title': 'Si le scroll est suffisamment long, il y un moyen de revenir rapidement en haut de page',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-5',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-5': {
				'id': 'section-2/question-5',
				'title': 'Les titres doivent véhiculer ce qu’ils représentent',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-6',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-6': {
				'id': 'section-2/question-6',
				'title': 'Les titres des labels sont concis',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-7',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-7': {
				'id': 'section-2/question-7',
				'title': 'Chaque page contient un titre explicite',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-8',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-8': {
				'id': 'section-2/question-8',
				'title': 'Les titres et labels sont lisibles',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-2/question-9',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-9': {
				'id': 'section-2/question-9',
				'title': 'Les formats d’écran sont similaires',
				'subtitle': 'à reformuler (glossaire format)',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-1',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			}
		}
	},
	'section-3': {
		'title': 'Efficience des actions',
		'subtitle': 'L’efficience des actions se réfère à la capacité d’atteindre son objectif avec rapidité et sans erreur. Sur mobile, l’efficience est d’autant plus importante pour l’utilisateur qui cherche à réaliser des tâches spécifiques, non-complexes et rapides.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-3/question-1',
				'title': 'L’utilisateur peut réaliser ses actions en un minimum de taps',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-2',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-2': {
				'id': 'section-3/question-2',
				'title': 'La tâche principale est facile à réaliser',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-3',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-3': {
				'id': 'section-3/question-3',
				'title': 'L’utilisateur peut accomplir la même action de plusieurs façons pour optimiser l’efficience',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-4',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-4': {
				'id': 'section-3/question-4',
				'title': 'Si certains CTA utilisent des pictogrammes, ils sont accompagnés de labels',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-5',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-5': {
				'id': 'section-3/question-5',
				'title': 'La terminologie / les pictogrammes utilisés pour les CTA sont signifiants',
				'subtitle': 'en cohérence avec l’action à réaliser',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-6',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-6': {
				'id': 'section-3/question-6',
				'title': 'Autocomplétion des champs',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-7',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-7': {
				'id': 'section-3/question-7',
				'title': 'Accès facile aux informations les plus recherchées',
				'subtitle': 'à reformuler',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-8',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-8': {
				'id': 'section-3/question-8',
				'title': 'Présence de raccourcis pour réaliser les actions principales',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-9',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-9': {
				'id': 'section-3/question-9',
				'title': 'L’utilisateur est protégé contre les erreurs',
				'subtitle': 'pas de risque de pertes de données au moment de quitter une page / une session',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-10',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-10',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-10',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-10': {
				'id': 'section-3/question-10',
				'title': 'En cas d’erreur de saisie, l’application sait adapter le contenu des résultats de recherche',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-11',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-11',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-11',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-11': {
				'id': 'section-3/question-11',
				'title': 'L’utilisateur peut corriger facilement des erreurs réalisées',
				'subtitle': 'modification des informations saisies',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-12',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-12',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-12',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-12': {
				'id': 'section-3/question-12',
				'title': 'Présence de messages d’erreurs.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-13',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-13',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-13',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-13': {
				'id': 'section-3/question-13',
				'title': 'Pertinance des messages d’erreurs.',
				'subtitle': 'informations sur la nature des erreurs commises et sur les actions à entreprendre pour les corriger',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-14',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-14',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-14',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-14': {
				'id': 'section-3/question-14',
				'title': 'Contextualisation des message d’erreur (intégré au flow utilisateur ou en popup)',
				'subtitle': 'à reformuler',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-15',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-15',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-15',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-15': {
				'id': 'section-3/question-15',
				'title': 'Toutes les actions sont réversibles',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-16',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-16',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-16',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-16': {
				'id': 'section-3/question-16',
				'title': 'Il y a une indication claire de la possibilité d’annuler la dernière action',
				'subtitle': 'à l’opposé de shake to undo',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-17',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-17',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-17',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-17': {
				'id': 'section-3/question-17',
				'title': 'Les messages de confirmation d’action sont clairs pour l’utilisateur',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-1',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			}
		}
	},
	'section-4': {
		'title': 'Fluidité de la navigation',
		'subtitle': 'La navigation est structurée de manière a amélioré la compréhension de l’application et de faciliter les déplacements au travers des pages',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-4/question-1',
				'title': 'Pas de splash screen ni de publicités interstitielles utilisées simultanément',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-2',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-2': {
				'id': 'section-4/question-2',
				'title': 'Utilsation d’élement animé durant le chargement de la page (skeleton screens, micro-interaction)',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-3',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-3': {
				'id': 'section-4/question-3',
				'title': 'L’application utilise un chargement qui se fait au fur et à mesure',
				'subtitle': 'blocs de contenus',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-4',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-4': {
				'id': 'section-4/question-4',
				'title': 'L’application profite des états vides pour donner des conseils',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-5',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-5': {
				'id': 'section-4/question-5',
				'title': 'L’application utilise des breadcrumbs si nécessaire',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-6',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-6': {
				'id': 'section-4/question-6',
				'title': 'Le bouton “Back” d’android fonctionne correctement?',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-7',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-7': {
				'id': 'section-4/question-7',
				'title': 'Si l’application utilise des transitions lors d’un changement de page, elle suit l’ordre naturel',
				'subtitle': 'à reformuler',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-8',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-8': {
				'id': 'section-4/question-8',
				'title': 'Ces transitions sont inversé lors d’un retour en arrière',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-9',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-9': {
				'id': 'section-4/question-9',
				'title': 'Les liens & CTAs sont affordants',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-10',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-10',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-10',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-10': {
				'id': 'section-4/question-10',
				'title': 'Les liens & CTAs sont de taille suffisante pour être cliquable quelle que soit la taille des doigts',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-11',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-11',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-11',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-11': {
				'id': 'section-4/question-11',
				'title': 'Les liens visités sont d’une couleur différente',
				'subtitle': 'à reformuler',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-12',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-12',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-12',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-12': {
				'id': 'section-4/question-12',
				'title': 'L’application utilise un menu hamburger uniquement si cela est nécessaire',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-13',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-13',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-13',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-13': {
				'id': 'section-4/question-2',
				'title': 'L’architecture du menu est simple à visualiser.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-14',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-14',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-14',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-14': {
				'id': 'section-4/question-14',
				'title': 'L’application suit une architecture claire',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-1',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			}
		}
	},
	'section-5': {
		'title': 'Qualité & coherence du design',
		'subtitle': 'Il existe des éléments d’accompagnement simples et agréables permettant de guider l’utilisateur tout au long de ses interactions avec l’application',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-5/question-1',
				'title': 'Pas plus d’une publicité par utilisation de l’application n’apparaît quand l’utilisateur est dessus',
				'subtitle': 'à reformuler : l’application n’abuse pas des publicités',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-2',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-2': {
				'id': 'section-5/question-2',
				'title': 'L’utilisateur n’est pas gêné dans son parcours à cause des publicités',
				'subtitle': 'pop up plein écran / box fixe bas de l’écran / durée d’affichage court',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-3',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-3': {
				'id': 'section-5/question-3',
				'title': 'Les publicités ont un CTA facilement percevable qui permettent de fermer le contenu publicitaire',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-4',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-4': {
				'id': 'section-5/question-4',
				'title': 'Les publicités ont le même emplacement de CTA pour fermer la publicité',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-5',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-5': {
				'id': 'section-4/question-5',
				'title': 'La publicité interstitielle et la publicité intégrée dans l’application n’existe pas ensemble (soit l’un, soit l’autre)',
				'subtitle': 'a reformuler',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-6',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-6': {
				'id': 'section-5/question-6',
				'title': 'Il est possible de partager du contenu avec d’autres utilisateurs',
				'subtitle': 'recommandations, fiche établissement',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-7',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-7': {
				'id': 'section-5/question-7',
				'title': 'Présence d’éléments permettant d’humaniser la relation de l’utilisateur avec l’application',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-8',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-8': {
				'id': 'section-5/question-8',
				'title': 'L’application utilise des images, illustrations, des sons, etc. pour susciter de l’intérêt',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-9',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-9': {
				'id': 'section-5/question-9',
				'title': 'Illustration : ont-elle le même style graphique au sein de l’application ? Utilise-t-elle les mêmes couleurs ? les mêmes proportions ? etc.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-10',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-10',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-10',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-10': {
				'id': 'section-5/question-10',
				'title': 'Iconography : sont-elles du même style graphique (outline / aplat / couleurs / …)',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-11',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-11',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-11',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-11': {
				'id': 'section-5/question-11',
				'title': 'Est ce qu’il y a une harmonie visuelle dans les différents composants : les marges entre les différents éléments, espace à l’intérieur des blocs, interlignes, titre / sous-titre, etc.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-12',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-12',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-12',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			},
			'question-12': {
				'id': 'section-5/question-12',
				'title': 'Cohérence avec la charte graphique',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'END',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'END',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'END',
						'expectedanswer': false,
						'points': 0,
					}
				],
				'answers': {},
				'results': {
					'points': 0,
					'recomendations': ''
				}
			}
		}
	}
}