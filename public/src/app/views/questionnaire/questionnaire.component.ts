import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../../assets/json/questionnaire';
import { Router } from '@angular/router';

@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
	all_question: any = QUESTIONS;
	current_section: number = 0;
	history: any = [];
	display_previous_audit: boolean = false;

	constructor( private router: Router ){}
	ngOnInit(){
		this.check_previous_audit();
	}

	//RESURECTION
	check_previous_audit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				if(questionnaire != null){
					this.display_previous_audit = true;
				}else{
					this.launch_new_audit();
				}
			});
	}
	get_questionnaire_from_storage(): Promise<any>{
		return new Promise((resolve, reject)=>{
			resolve( localStorage.getItem('audit-ux') );
		})
	}
	delete_previous_audit(){
		localStorage.removeItem("audit-ux");
		this.display_previous_audit = false;
		this.launch_new_audit();
	}
	ressurect_previous_audit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				this.display_previous_audit = false;
				let questionnaire_json = JSON.parse( questionnaire );
				this.history = questionnaire_json;
				this.current_section = (questionnaire_json.length - 1);
			})
	}
	launch_new_audit(){
		this.history.push({
			'title': QUESTIONS['section-1'].title,
			'subtitle': QUESTIONS['section-1'].subtitle,
			'questions': []
		})
		this.history[0].questions.push( QUESTIONS['section-1'].questions['question-1'] );
	}

	//SECTION NAVIGTOR
	goto_next_section(){
		let questions_length = (this.history[this.current_section].questions.length - 1),
			latest_answer = this.history[this.current_section].questions[questions_length].answers,
			is_last_answer_empty = !Object.keys(latest_answer).length,
			section_total = (this.history.length -1);
		
		if( is_last_answer_empty == true ){
			alert( 'Please select an answer' );
		}else if( this.current_section < section_total ){
			this.current_section ++;
		}else{
			this.build_next_question( latest_answer.nextquestion );
		}
	}
	goto_previous_section(){
		this.current_section --;
	}

	//QUESTION BUILING
	save_answer( answers, index ){
		let question_number = index,
		last_question = this.history[this.current_section].questions[question_number];

		last_question.answers = answers;

		if( last_question.answers.expectedanswer == true ){
			last_question.results.points = last_question.answers.points;
		}
	}
	build_next_question( next_block_string ){
		localStorage.setItem("audit-ux", JSON.stringify(this.history));
		let block = next_block_string.split("/"),
			next_section = block[0],
			next_question =  block[1];

		if(next_block_string == "END"){
			//calculate the percentage rate for the last section
			this.calc_percentage_rate( this.history[this.current_section].questions );
			this.router.navigate(['results']);
		}else{
			let current_section_name = 'section-'+(this.current_section +1);
			if( current_section_name == next_section){
				this.history[this.current_section].questions.push( QUESTIONS[next_section].questions[next_question] );
			}else{
				//calculate the percentage rate for the latest section
				this.calc_percentage_rate( this.history[this.current_section].questions );
				
				//build new section
				this.history.push({
					'title': QUESTIONS[next_section].title,
					'subtitle': QUESTIONS[next_section].subtitle,
					'questions': []
				});
				this.current_section ++;
				this.history[this.current_section].questions.push( QUESTIONS[next_section].questions[next_question] );
			}

		}
	}

	//RESULT CALCULATOR
	calc_percentage_rate( questions ){
		let total_points = 0;
		let earned_points = 0;

		//get total points
		for (var i = questions.length - 1; i >= 0; i--) {
			for (var j = questions[i].possibleanswers.length - 1; j >= 0; j--) {
		 		if( questions[i].possibleanswers[j].expectedanswer == true ){
		 			total_points += questions[i].possibleanswers[j].points;
		 		}
			}	
		}

		//get earned points
		for (var i = questions.length - 1; i >= 0; i--) { 
			earned_points += questions[i].results.points
		}

		let percentage_rate = Math.round( ((earned_points/total_points)*100) * 10 ) / 10;;
		this.history[this.current_section].percentage_rate = percentage_rate;

		//update the localstorage
		localStorage.setItem("audit-ux", JSON.stringify(this.history));

	}

	//OTHERS
	is_question_answerd(){
		let questions_length = (this.history[this.current_section].questions.length - 1);
		let latest_answer = this.history[this.current_section].questions[questions_length].answers;

		return !Object.keys( latest_answer ).length;
	}
}
