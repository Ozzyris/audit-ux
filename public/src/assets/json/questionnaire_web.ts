export const QUESTIONNAIRE_WEB = {
	'section-1': {
		'title': 'Experience Utilisateur',
		'subtitle': 'La globalité de l’expérience d’une personne utilisant un produit tel qu’un site internet ou une application, en particulier sur sa facilité ou son appréciabilité a utiliser.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-1/question-1',
				'title': 'Le site peut être personnalisé aux besoins de l’utilisateur.',
				'subtitle': 'monnaie, langue, pays, taxes, livraison',
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
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-2',
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
				'title': 'S’enregistrer apporte de la valeur à l’utilisateur.',
				'subtitle': 'Un bouton labellé ”Essaie Gratuit” communique un bénéfice clair, mais un bouton ”Signup” ne le fait pas.',
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
						'order': 4,
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
				'title': 'Les prix sont transparents.',
				'subtitle': 'Les prix sont affichés de manière claire. L’utilisateur a une vue complète de chaque fonctionnalité et de leurs prix. Il n’y a pas de coût caché.',
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
						'order': 4,
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
				'title': 'Des exemples de contenu sont visibles avant de s’enregistrer.',
				'subtitle': 'Il y a un exemple de newsletter à côté du bouton de souscription.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-5',
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
			'question-5': {
				'id': 'section-1/question-5',
				'title': 'Le site est crédible.',
				'subtitle': 'Le site affiche des références crédibles, des crédits, des informations de contact, les images de réelles personnes sont affiché.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-6',
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
			'question-6': {
				'id': 'section-1/question-6',
				'title': 'Les informations du produit et des services sont bien organisé et aéré.',
				'subtitle': 'Les informations peuvent être comprises dès un premier scan de la page. Les images peuvent être agrandies pour plus de détails.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-1',
						'expectedanswer': false,
						'points': 1,
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
		'title': 'Homepage',
		'subtitle': 'C’est la page typicalement rencontrée en premier lorsqu’un utilisateur entre sur le site internet. Elle lie en général aux autres pages du site.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-2/question-1',
				'title': 'Toutes les actions sont claires.',
				'subtitle': 'L’utilisateur est au courant des étapes suivantes et de quelle manière ces étapes lui bénéficie. La proposition de valeur du site est claire pour l’utilisateur.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-2',
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
				'id': 'section-2/question-2',
				'title': 'La première impression du site internet est positive.',
				'subtitle': 'La page de landing créer une bonne première impression et supporte la conversion du site.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-3',
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
				'id': 'section-2/question-3',
				'title': 'Le nom de l’utilisateur est visible une fois celui-ci connecté.',
				'subtitle': 'Bonjour Jack, Bienvenue Mr. Smith',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-4',
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
				'id': 'section-2/question-4',
				'title': 'Les changements majeurs sont annoncés.',
				'subtitle': 'Par exemple les changements de police de livraison ou les downtimes / maintenances du site .',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-5',
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
			'question-5': {
				'id': 'section-2/question-5',
				'title': 'L’adresse et les informations de contact de l’entreprise sont visibles.',
				'subtitle': 'Ils doivent être facilement accessibles dès la page d’accueil.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-6',
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
			'question-6': {
				'id': 'section-2/question-6',
				'title': 'Il y a une politique de confidentialité,',
				'subtitle': 'dans le cas ou le site récupère des informations sur les utilisateurs.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-7',
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
			'question-7': {
				'id': 'section-2/question-7',
				'title': 'Les images sont en contexte et répondent à un besoin.',
				'subtitle': 'Il n’y a pas de photos de stock ou de modèle. Les photos utilisées sont des photos du produit de haute qualité.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-8',
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
			'question-8': {
				'id': 'section-2/question-8',
				'title': 'Le site internet marche sans le ”www”.',
				'subtitle': 'Pour éviter les pertes lors d’un changement d’url.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-1',
						'expectedanswer': false,
						'points': 1,
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
		'title': 'Accessibilité',
		'subtitle': 'L’accessibilité d’un système d’informations vise à ce que celui-ci puisse être utilisé par tous les types d’utilisateurs.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-3/question-1',
				'title': 'Tous les éléments autres que du texte ont des attributs alt,',
				'subtitle': 'tels que les images, les cartes, les sons ou les vidéos.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-2',
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
				'id': 'section-3/question-2',
				'title': 'La couleur seule n’est pas utilisée pour transmettre des informations,',
				'subtitle': 'pour éviter que les personnes daltoniennes soient bloquées.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-3',
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
				'id': 'section-3/question-3',
				'title': 'Le contenu reste lisible même sans feuilles de style.',
				'subtitle': 'Les logiciels de reconnaissance de texte (pour personne aveugle) lisent le html pur.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-4',
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
				'id': 'section-3/question-4',
				'title': 'Le site n’utilise pas de flash.',
				'subtitle': 'Flash est une boîte noire pour les logiciels de reconnaissance de texte.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-5',
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
			'question-5': {
				'id': 'section-3/question-5',
				'title': 'Les liens, boutons et checkboxes sont facilement cliquables.',
				'subtitle': 'L’utilisateur peut sélectionner une checkbox en cliquant sur le texte, pas simplement sur la checkbox elle-même, les éléments sont aussi suffisemment espacés.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-6',
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
			'question-6': {
				'id': 'section-3/question-6',
				'title': 'Le titre de la fenêtre est descriptif.',
				'subtitle': 'Elle reste facilement compréhensible même après l’avoir mis en favoris.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-1',
						'expectedanswer': false,
						'points': 1,
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
		'title': 'Navigation',
		'subtitle': 'Un utilisateur ne devrait jamais avoir besoin de se souvenir du chemin emprunté pour arriver à une page. Ce chemin doit être logique.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-4/question-1',
				'title': 'Les liens importants ne sont pas placés sur des blocs animés,',
				'subtitle': 'tels que des carrousels à rotation automatiques.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-2',
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
				'id': 'section-4/question-2',
				'title': 'L’organisation de A-Z est évité autant que possible,',
				'subtitle': 'cette organisation est utilisée uniquement s’il n’y a pas de meilleure alternative telle que réunir les éléments par groupe de similarité.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-3',
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
				'id': 'section-4/question-3',
				'title': 'L’utilisateur est conscient de sa position sur le site à tout moment,',
				'subtitle': 'grâce à l’utilisation de breadcrumb ou d’une navigation claire.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-4',
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
				'id': 'section-4/question-4',
				'title': 'La navigation est consistent sur chaque page.',
				'subtitle': 'Les inconsistences de navigation perdent les utilisateurs, et réduisent leur taux de rétention.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-5',
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
			'question-5': {
				'id': 'section-4/question-5',
				'title': 'Le bouton retour du navigateur est toujours fonctionnel.',
				'subtitle': 'Souvent quand un utilisateur est perdu, il se sert de ce bouton comme d’une bouée de secours.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-6',
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
			'question-6': {
				'id': 'section-4/question-6',
				'title': 'Les liens sont descriptifs.',
				'subtitle': 'Les effets de survols sont utilisés pour les liens de navigation et leur texte expliquent de manière claire ce qu’ils font. il n’y a pas de liens ”cliquez ici”',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-7',
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
			'question-7': {
				'id': 'section-4/question-7',
				'title': 'L’url du site peut être retenue sans efforts.',
				'subtitle': 'Cela facilite le retour des utilisateurs sur le site.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-1',
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
		}
	},
	'section-5': {
		'title': 'Recherche',
		'subtitle': 'lorsqu’un utilisateur vient sur un site internet, souvent c’est parce qu’il a un objectif précis en tête, un bon outil de recherche va l’aider dans son voyage.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-5/question-1',
				'title': 'Le site propose une barre de recherche,',
				'subtitle': 'dans le cas d’un large site ou d’une grande quantité d’informations.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-2',
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
				'id': 'section-5/question-2',
				'title': 'La barre de recherche est disponible sur chaque page,',
				'subtitle': 'et pas simplement sur la page d’accueil.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-3',
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
				'id': 'section-5/question-3',
				'title': 'La barre de recherche est suffisamment large,',
				'subtitle': 'de manière à ce que les utilisateurs puissent voir ce qu’ils écrivent.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-4',
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
				'id': 'section-5/question-4',
				'title': 'La barre de recherche est un champ de texte,',
				'subtitle': 'de manière à ce que les utilisateurs puissent commencer leur recherche immédiatement, et non un lien vers une page de recherche.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-1',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-1',
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
		}
	},
	'section-6': {
		'title': 'Liens',
		'subtitle': 'Les liens et les boutons sont souvent mélangés, pourtant il existe une structure claire pour aider à la navigation d’un site internet.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-6/question-1',
				'title': 'Les Ctas sont disponibles sous forme de bouton,',
				'subtitle': 'et non de liens.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-2',
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
				'id': 'section-6/question-2',
				'title': 'Les liens n’ouvrent pas de nouvelle fenêtre ou de tab,',
				'subtitle': 'à l’exception des fichiers .pdf.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-3',
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
				'id': 'section-6/question-3',
				'title': 'Les liens sont facilement reconnaissables.',
				'subtitle': 'Ils donnent l’impression d’être cliquables. Les textes qui ne sont pas cliquables ne doivent pas être soulignés.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-4',
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
				'id': 'section-6/question-4',
				'title': 'Les liens visités sont d’une couleur different que ceux qui ne le sont pas,',
				'subtitle': 'pour aider l’utilisateur à savoir quel chemin il a suivi.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-5',
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
			'question-5': {
				'id': 'section-6/question-5',
				'title': 'Il n’y a pas de liens cassé.',
				'subtitle': 'Faîte un check au <a href="https://www.brokenlinkcheck.com/" target="_blank">brokenlinkcheck.com</a>',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-1',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-1',
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
		}
	},
	'section-7': {
		'title': 'Structure',
		'subtitle': 'Une bonne structure va faire sens à l’utilisateur et l’aider à trouver ce qu’il cherche.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-7/question-1',
				'title': 'Le contenu important est visible en premier.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-2',
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
				'id': 'section-7/question-2',
				'title': 'Le site est responsive.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-3',
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
				'id': 'section-7/question-3',
				'title': 'Les informations importantes sont groupés ensemble de manière claire.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-4',
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
				'id': 'section-7/question-4',
				'title': 'Il n’y a pas d’abus de fenêtre popup.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-5',
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
			'question-5': {
				'id': 'section-7/question-5',
				'title': 'Le site internet est consistent.',
				'subtitle': 'Les templates de pages sont consistants sur l’ensemble du site.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-7/question-6',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-7/question-6',
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
			'question-6': {
				'id': 'section-7/question-6',
				'title': 'Les page sont suffisement aéré.',
				'subtitle': 'Il y a suffisamment d’espace vide pour supporter le scanning des pages.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-1',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-1',
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
		}
	},
	'section-8': {
		'title': 'Process',
		'subtitle': 'Tout n’est pas uniquement visuel, ce qui se passe derrière les rideaux est tout aussi important que le produit final.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-8/question-1',
				'title': 'Le site utilise des services de tracking pour comprendre ses utilisateurs.',
				'subtitle': 'Les problèmes d’utilisabilité et d’expérience utilisateur sont suivi dans un tracker d’issues.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-2',
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
				'id': 'section-8/question-2',
				'title': 'Le client a des sessions de tests utilisateur avec ses utilisateurs cible,',
				'subtitle': 'et ces sessions sont faites à toutes les étapes du projet.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-3',
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
				'id': 'section-8/question-3',
				'title': 'Le client prioritise ses taches,',
				'subtitle': 'et les changements de prioritization sont basé sur leur importance.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-4',
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
				'id': 'section-8/question-4',
				'title': 'Le client analyse l’impact de chacune de ses taches.',
				'subtitle': 'Les changements peuvent être couteux en temps et en argent. De ce fait il est important d’analyser leur impact.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-8/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-8/question-5',
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
			'question-5': {
				'id': 'section-8/question-5',
				'title': 'Les changements sur la platform ont des plans des ROI.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-1',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-1',
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
		}
	},
	'section-9': {
		'title': 'Formulaires',
		'subtitle': 'Un formulaire peut vite devenir la partie la plus douloureuse d’un site internet, mais bien structuré il est aussi une des clefs du succès.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-9/question-1',
				'title': 'Les formulaires sont simples.',
				'subtitle': 'Seules les questions nécessaires sont pausées.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-2',
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
				'id': 'section-9/question-2',
				'title': 'Les formulaires évitent l’utilisation de dropdown trop long,',
				'subtitle': 'à la place les utilisateurs peuvent utiliser des champs de saisis auto-complété.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-3',
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
				'id': 'section-9/question-3',
				'title': 'Les champs de saisis peuvent être agrandis.',
				'subtitle': 'Par exemple pour les dates et les textareas.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-4',
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
				'id': 'section-9/question-4',
				'title': 'Tous les champs de saisis utilisent des labels basés sur des termes communs.',
				'subtitle': 'nom, prénom, adresse',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-5',
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
			'question-5': {
				'id': 'section-9/question-5',
				'title': 'L’auto-completion est actif.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-6',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-6',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-6',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-6',
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
			'question-6': {
				'id': 'section-9/question-6',
				'title': 'Les champs de saisis ont des exemples clairs dans leur placeholder.',
				'subtitle': 'Ils aident l’utilisateur à remplir ce champ.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-7',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-7',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-7',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-7',
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
			'question-7': {
				'id': 'section-9/question-7',
				'title': 'Les tooltypes sont utilisés quand cela est nécessaire.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-8',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-8',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-8',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-8',
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
			'question-8': {
				'id': 'section-9/question-8',
				'title': 'Les formulaires ont une page de confirmation.',
				'subtitle': 'tbd',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-9',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-9',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-9/question-9',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-9/question-9',
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
			'question-9': {
				'id': 'section-9/question-9',
				'title': 'Les messages d’erreur sont contextualisés,',
				'subtitle': 'et pas simplement un toast message en haut de la page.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-1',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-1',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-1',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-1',
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
		}
	},
	'section-10': {
		'title': 'Contenu',
		'subtitle': 'Les utilisateurs visitent un site internet pour son contenu, pas son design.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-10/question-1',
				'title': 'Le site internet est suffisamment contrasté.',
				'subtitle': 'Il y a suffisamment de contraste entre le texte et le fond de page.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-2',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-2',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-2',
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
				'id': 'section-10/question-2',
				'title': 'Le contenu de chaque page est facilement scannable,',
				'subtitle': 'en utilisant des paragraphes court, des introductions descriptives, des listes et de mots clefs.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-3',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-3',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-3',
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
				'id': 'section-10/question-3',
				'title': 'Les textes sont écrits en langage commun.',
				'subtitle': 'Les mots sont facilement compréhensibles par les utilisateurs.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-4',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-4',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-4',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-4',
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
				'id': 'section-10/question-4',
				'title': 'Les textes sont utiles et à jour.',
				'subtitle': 'Ils offrent des réponses aux questions les plus communes. Il n’y a pas de longue introduction ou de ”bienvenus sur notre site internet” type de message.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'conforme',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-5',
						'expectedanswer': true,
						'points': 2,
					},
					{
						'order': 2,
						'title': 'partiel',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-5',
						'expectedanswer': false,
						'points': 1,
					},
					{
						'order': 3,
						'title': 'non conforme',
						'requestrecomendations': true,
						'nextquestion': 'section-10/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'section-10/question-5',
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
			'question-5': {
				'id': 'section-10/question-5',
				'title': 'Le site n’abuse pas des majuscules.',
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
					},
					{
						'order': 4,
						'title': 'Hors context',
						'requestrecomendations': false,
						'nextquestion': 'END',
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
		}
	}
};