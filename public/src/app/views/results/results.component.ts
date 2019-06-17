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
				this.questionnaire = JSON.parse( questionnaire );
			});
	}

	get_questionnaire_from_storage(): Promise<any>{
    	return new Promise((resolve, reject)=>{
      		resolve( localStorage.getItem('audit-ux') );
    	})
	}
}


