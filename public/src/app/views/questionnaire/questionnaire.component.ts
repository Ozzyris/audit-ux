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
					this.build_next_section( 'section-1' );
					this.build_next_question( 'section-1', 'question-1' );
				}
			});
	}
	delete_previous_audit(){
		localStorage.removeItem("audit-ux");
		this.display_previous_audit = false;
		this.build_next_section( 'section-1' );
		this.build_next_question( 'section-1', 'question-1' );
	}
	ressurect_previous_audit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				this.display_previous_audit = false;
				let questionnaire_json = JSON.parse( questionnaire );
				this.history = questionnaire_json;
				this.current_section = (questionnaire_json.length - 1);
				let next_block = this.history[this.current_section].questions[(this.history[this.current_section].questions.length - 1)].answers.nextquestion,
					block = next_block.split("/"),
					next_section = block[0],
					next_question =  block[1];

				this.build_next_question( next_section, next_question );
			})
	}

	//SECTION NAVIGTOR
	goto_next(){
		let nb_of_section = this.history.length,
			latest_question = this.history[this.current_section].questions.length - 1,
			latest_answer = this.history[this.current_section].questions[ latest_question ].answers,
			next_block = latest_answer.nextquestion;

		if(next_block == "END"){
			this.router.navigate(['results']);
		}else{
			let block = next_block.split("/"),
				next_section = block[0],
				next_question =  block[1],
				current_section_name = 'section-'+(this.current_section +1);

			
				if( current_section_name != next_section){
					console.log( nb_of_section, (this.current_section+1), nb_of_section==(this.current_section+1) );
					if( nb_of_section == (this.current_section+1)){
						this.build_next_section( next_section );
						this.current_section ++;
						this.build_next_question( next_section, next_question );
					}else{
						this.current_section ++;
					}
				}else{
					this.build_next_question( next_section, next_question );
				}
			}
	}
	goto_previous(){
		this.current_section --;
	}

	//QUESTION BUILING
	save_answer( answers, question_id ){
		for (var i = this.history[this.current_section].questions.length - 1; i >= 0; i--) {
			if( this.history[this.current_section].questions[i].id == question_id){
				this.history[this.current_section].questions[i].answers = answers;
				this.history[this.current_section].questions[i].results.points = this.history[this.current_section].questions[i].answers.points;
				this.calc_percentage_rate( this.history[this.current_section].questions );
				localStorage.setItem("audit-ux", JSON.stringify(this.history));
			}
		}
	}
	build_next_question( next_section, next_question ){
		this.history[this.current_section].questions.push( QUESTIONS[next_section].questions[next_question] );
	}
	build_next_section( next_section ){
		this.history.push({
			'title': QUESTIONS[next_section].title,
			'subtitle': QUESTIONS[next_section].subtitle,
			'questions': []
		});
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
		let percentage_rate = Math.round( ((earned_points/total_points)*100) * 10 ) / 10;
		this.history[this.current_section].percentage_rate = percentage_rate;
	}

	//OTHERS
	is_question_answerd(){
		let questions_length = (this.history[this.current_section].questions.length - 1);
		let latest_answer = this.history[this.current_section].questions[questions_length].answers;

		return !Object.keys( latest_answer ).length;
	}
	get_questionnaire_from_storage(): Promise<any>{
		return new Promise((resolve, reject)=>{
			resolve( localStorage.getItem('audit-ux') );
		})
	}
}
