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
		
		if( last_answer == "" ){
			alert( 'Please select an answer' );
		}else{
			let answer_length = this.history[history_length].possibleanswers.length;
			for (var i = answer_length - 1; i >= 0; i--) {
				if( this.history[history_length].possibleanswers[i].title == last_answer){
					this.build_next_block( this.history[history_length].possibleanswers[i].nextquestion );
				}
			}
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
		let last_question = this.history[history_length]

		last_question.answers = answers.title
	}
}
