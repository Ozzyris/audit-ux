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
	history: any = [];

	constructor( private router: Router ){}
	ngOnInit(){
		this.history.push( QUESTIONS['section-1']['question-1'] );
	}


	get_next_block(){
		let history_length = (this.history.length - 1);
		let last_answer = this.history[history_length].answers;
		let is_last_answer_empty = !Object.keys(last_answer).length;
		
		if( is_last_answer_empty == true ){
			alert( 'Please select an answer' );
		}else{
			this.build_next_block( last_answer.nextquestion );
		}
	}

	build_next_block( next_block_string ){
		localStorage.setItem("audit-ux", JSON.stringify(this.history));

		if(next_block_string == "END"){
			this.router.navigate(['results']);
		}else{
			let block = next_block_string.split("/");
			this.history.push( QUESTIONS[block[0]][block[1]] );
		}
	}

	save_answer( answers ){
		let history_length = (this.history.length - 1);
		let last_question = this.history[history_length];

		last_question.answers = answers;

		if( last_question.answers.expectedanswer == true ){
			last_question.results.points = last_question.answers.points;
		}

		console.log( last_question );
	}

	is_question_answerd(){
		let history_length = (this.history.length - 1);
		let last_answer = this.history[history_length].answers;

		return !Object.keys( last_answer ).length;
	}
}
