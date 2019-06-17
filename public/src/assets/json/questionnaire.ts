export const QUESTIONS = {
	'section-1': {
		'title': 'User Experience',
		'subtitle': 'The overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'title': 'Is the website personalize to the user settings?',
				'subtitle': 'currency, language, country, taxes, delivery',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-2',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-2',
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
				'title': 'Is registering provides value to users?',
				'subtitle': 'A button called ‘Free trial’ communicates a clear benefit, but ‘Register’ doesn’t.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-3',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-3',
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
				'title': 'Are the pricings transparent?',
				'subtitle': 'Prices are clearly displayed, you can have an easy overview of the different features in different tarifs, there are no hidden costs.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-1/question-4',
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
				'title': 'Is there sample content?',
				'subtitle': 'There is a sample of the newsletter next to the newsletter sign up form.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-5',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the website credible?',
				'subtitle': 'Credible references, credentions, contact details, images of real people are displayed.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-1/question-6',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Uncluttered product and service information?',
				'subtitle': 'Information is scannable, images can be enlarged or zoomed in on for more detailed viewing.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-1',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
		'title': 'Homepage',
		'subtitle': 'The page typically encountered first on a website that usually contains links to the other pages of the site.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'title': 'Are all the actions clear call?',
				'subtitle': 'users know what to do next and why it benefits them. They understand the value proposition of the site',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-2',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is it a positive first impression?',
				'subtitle': 'The homepage creates a positive first impression and supports conversion',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-3',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Are the user’s name displayed for logged in users?',
				'subtitle': 'Hello Jack, Welcome mr. Smith',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Are the major changes annonced?',
				'subtitle': 'For example changes in the delivery policy or website downtimes / maintenance on banking apps',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-5',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the company location and contact information available?',
				'subtitle': 'It need to be easily accessible from the Homepage',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-6',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is their a privacy policy?',
				'subtitle': 'In case the site gathers information of users.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-7',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Are the images are relevant and meaningful?',
				'subtitle': 'No unrelated stock photo’s or models, there are high quality pictures of the product or service.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-2/question-8',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the site url works with or without www?',
				'subtitle': 'To avoid user to get lost wiht url change.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'END',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
			},
		}
	}
};