export const QUESTIONS = {
	'section-1': {
		'title': 'User Experience',
		'subtitle': 'The overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-1/question-1',
				'title': '[section1] - Is the website personalize to the user settings?',
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
				'id': 'section-1/question-2',
				'title': '[section1] - Is registering provides value to users?',
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
				'id': 'section-1/question-3',
				'title': '[section1] - Are the pricings transparent?',
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
				'id': 'section-1/question-4',
				'title': '[section1] - Is there sample content?',
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
				'id': 'section-1/question-5',
				'title': '[section1] - Is the website credible?',
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
				'id': 'section-1/question-6',
				'title': '[section1] - Uncluttered product and service information?',
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
				'id': 'section-2/question-1',
				'title': '[section 2] - Are all the actions clear call?',
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
				'id': 'section-2/question-2',
				'title': '[section 2] - Is it a positive first impression?',
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
				'id': 'section-2/question-3',
				'title': '[section 2] - Are the user’s name displayed for logged in users?',
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
				'id': 'section-2/question-4',
				'title': '[section 2] - Are the major changes annonced?',
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
				'id': 'section-2/question-5',
				'title': '[section 2] - Is the company location and contact information available?',
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
				'id': 'section-2/question-6',
				'title': '[section 2] - Is their a privacy policy?',
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
				'id': 'section-2/question-7',
				'title': '[section 2] - Are the images are relevant and meaningful?',
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
				'id': 'section-2/question-8',
				'title': '[section 2] - Is the site url works with or without www?',
				'subtitle': 'To avoid user to get lost with url change.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-1',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
		'title': 'Accessibility',
		'subtitle': 'Accessibility defines users ability to use products/services, but not the extent to which they can attain goals (usability). While accessibility is different from usability, it has a clear impact on the user experience and should always be considered as part of a great user experience.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-3/question-1',
				'title': 'Does all non-text elements have alt attribtues?',
				'subtitle': 'Such as images, maps, sounds and video',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-2',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is color alone is used to convey information?',
				'subtitle': 'Color-blind people might get confuse.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-3',
						'expectedanswer': true,
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
				'title': 'is the content is readable without a stylesheet?',
				'subtitle': 'Blind people use voice recognition who read pure html.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Does the website use flash?',
				'subtitle': 'Flash is a blackbox to text recognition, and confuse everyone.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'section-3/question-5',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-5',
						'expectedanswer': true,
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
				'title': 'Are links buttons and checkboxes are easily clickable?',
				'subtitle': 'A user can select a checkbox by clicking the text, not just the checkbox. The element also have sufficient margin on mobile.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-3/question-6',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is there a site description in the window title?',
				'subtitle': 'Which is easily understandable as a bookmark',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-1',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
		'title': 'Navigation',
		'subtitle': 'A user should never feel the need to remember his way around your Web App. It should be out front and pretty obvious',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-4/question-1',
				'title': 'Are important links placed in moving features?',
				'subtitle': 'For example auto-rotating carousels',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-2',
						'expectedanswer': true,
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
				'title': 'Is alphabetical A-Z sorting is avoided?',
				'subtitle': 'It is used only when there are no better alternatives such as grouping items into related groups',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-3',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Does the user know where he is on the site at all time?',
				'subtitle': 'By using breadcrumb, or common navigation pattern',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the navigation is consistent on every page?',
				'subtitle': 'Inconsistent navigation often confuse people, and reduce retention rate',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-5',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the browser’s ‘back’ button is disabled?',
				'subtitle': 'Often when lost peoples will use this button as a lifeline',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'section-4/question-6',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-6',
						'expectedanswer': true,
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
				'title': 'Are the links descriptive?',
				'subtitle': 'hover effects are used on navigation links, and the titles clearly explains where the call to action leads to. No ‘click here’ links',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-4/question-7',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the site’s url is memorable?',
				'subtitle': 'This will help user in their search later on.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-1',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
			},
		}
	},
	'section-5': {
		'title': 'Search',
		'subtitle': 'User will come to a website often with a spécific goal in mind, a good search tool will help them in their journey.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-5/question-1',
				'title': 'Is there is a search bar?',
				'subtitle': 'in case of a large website, or large amount of informations.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-2',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-5/question-2',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 3,
						'title': 'not related',
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
				'title': 'Is the search is available on every page?',
				'subtitle': 'not just the homepage',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-3',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the search box is wide enough?',
				'subtitle': 'so that users can see what they’ve typed',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-5/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
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
				'title': 'Is the search a form?',
				'subtitle': 'where users can type search words immediately, not a link',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-1',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-1',
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
	},
	'section-6': {
		'title': 'Links',
		'subtitle': 'Links and button often get confused, yet a clear structure will help the global navigation of your website.',
		'percentage_rate': 0,
		'questions': {
			'question-1': {
				'id': 'section-6/question-1',
				'title': 'Are the important call to actions displayed as buttons?',
				'subtitle': 'not link',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-2',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-2',
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
				'id': 'section-6/question-2',
				'title': 'Are links open a new browser tab or window?',
				'subtitle': 'unless it is a .pdf file',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-3',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-3',
						'expectedanswer': true,
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
				'title': 'Are links easily recognizable?',
				'subtitle': 'They look clickable. Text that is not clickable should not be underlined',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-4',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-4',
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
				'id': 'section-6/question-4',
				'title': 'Is visited links color different than unvisited?',
				'subtitle': 'To help the user know which path he took.',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': false,
						'nextquestion': 'section-6/question-5',
						'expectedanswer': true,
						'points': 1,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': true,
						'nextquestion': 'section-6/question-5',
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
				'id': 'section-6/question-5',
				'title': 'Is there broken links?',
				'subtitle': 'Do a check with a <a href="https://www.brokenlinkcheck.com/" target="_blank">link checker</a>',
				'possibleanswers': [
					{
						'order': 1,
						'title': 'yes',
						'requestrecomendations': true,
						'nextquestion': 'END',
						'expectedanswer': false,
						'points': 0,
					},
					{
						'order': 2,
						'title': 'no',
						'requestrecomendations': false,
						'nextquestion': 'END',
						'expectedanswer': true,
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
		'title': 'Layout',
		'subtitle': 'A good layout will help your user make sence of your website and find what they are looking for.',
		'percentage_rate': 0,
		'questions': {}
	},
	'section-8': {
		'title': 'Process',
		'subtitle': 'Not everything is visuel, the behind the scene is as important as your final product.',
		'percentage_rate': 0,
		'questions': {}
	},
	'section-9': {
		'title': 'Forms',
		'subtitle': 'Form can me the most pain taking part of a website, well structuring them is key to success.',
		'percentage_rate': 0,
		'questions': {}
	},
	'section-10': {
		'title': 'Content',
		'subtitle': 'People come to a website for its content not its design, make it count.',
		'percentage_rate': 0,
		'questions': {}
	}
};