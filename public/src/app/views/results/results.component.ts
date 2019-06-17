import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

	percentage_rate: number = 0;
	questionnaire: any = [];

	constructor(){}
	ngOnInit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				this.analyse_questionnaire( JSON.parse( questionnaire ) );
				this.questionnaire = JSON.parse( questionnaire );
			});
	}

	get_questionnaire_from_storage(): Promise<any>{
    	return new Promise((resolve, reject)=>{
      		resolve( localStorage.getItem('audit-ux') );
    	})
	}

	analyse_questionnaire( questionnaire ){
		let total_points = 0;
		let earned_points = 0;

		//get total points
		for (var i = questionnaire.length - 1; i >= 0; i--) {
			for (var j = questionnaire[i].possibleanswers.length - 1; j >= 0; j--) {
				if( questionnaire[i].possibleanswers[j].expectedanswer == true ){
					total_points += questionnaire[i].possibleanswers[j].points;
				}
			}
			
		}

		//get earned points
		for (var i = questionnaire.length - 1; i >= 0; i--) { 
			earned_points += questionnaire[i].results.points
		}


		console.log(earned_points + ' / ' + total_points);
		this.percentage_rate = (earned_points/total_points)*100;
	}
}


