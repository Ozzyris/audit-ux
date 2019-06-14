import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../../assets/json/questionnaire';

@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
	all_question: any = QUESTIONS;
	history: any = [];

	constructor(){}
	ngOnInit(){
		this.history.push( QUESTIONS['section-1']['question-1'] );
	}


	get_next_block(){
		let last_question = (this.history.length - 1);
		let last_answer = this.history[last_question].answers;
		
		if( last_answer == "" ){
			alert( 'Please select an answer' );
		}else{
			let answer_length = this.history[last_question].possibleanswers.length;
			for (var i = answer_length - 1; i >= 0; i--) {
				if( this.history[last_question].possibleanswers[i].title == last_answer){
					this.build_next_block( this.history[last_question].possibleanswers[i].nextquestion );
				}
			}
		}
	}

	build_next_block( next_block_string ){
		if(next_block_string == "END"){
			alert( 'Questionnaire finished' );
		}else{
			let block = next_block_string.split("/");
			this.history.push( QUESTIONS[block[0]][block[1]] );
		}
	}
}
