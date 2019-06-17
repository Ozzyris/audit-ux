export const QUESTIONS = {
	'section-1': {
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
			}		}, 
		'question-6': {
			'title': 'Uncluttered product and service information?',
			'subtitle': 'Information is scannable, images can be enlarged or zoomed in on for more detailed viewing.',
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
		}
	}
};