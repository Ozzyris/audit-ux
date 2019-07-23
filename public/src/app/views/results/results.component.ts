import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
	questionnaire: any = [];

	charts_datasets: any = [
		{
			data: [65, 59, 90, 81, 56, 55, 40],
			label: 'UX Audit',
			backgroundColor: ['rgba(50, 62, 64, .5)', 'rgba(242, 171, 39, .5)', 'rgba(217, 125, 13, .5)', 'rgba(115, 32, 2, .5)', 'rgba(217, 77, 26, .5)', 'rgba(102, 217, 196, .5)', 'rgba(242, 237, 160, .5)', 'rgba(242, 163, 94, .5)', 'rgba(217, 133, 85, .5)', 'rgba(156, 191, 80, .5)'],
			// backgroundColor: ['rgba(50, 62, 64, .5)'],
			borderColor: 'rgba(255, 255, 255, 1)',
			// highlightFill: ['rgba(50, 62, 64, .5)'],
			highlightFill: ['rgb(50, 62, 64)', 'rgb(242, 171, 39)', 'rgb(217, 125, 13)', 'rgb(115, 32, 2)', 'rgb(217, 77, 26)', 'rgb(102, 217, 196)', 'rgb(242, 237, 160)', 'rgb(242, 163, 94)', 'rgb(217, 133, 85, 1)', 'rgb(156, 191, 80, 1)'],
            highlightStroke: "rgba(255, 255, 255, 1)",
		},
	];
	charts_label: any = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
	charts_options: any = {
		responsive: true,
		legend: {
			position: 'right',
		},
		scale: {
            ticks: {
				beginAtZero: true,
				min: 0,
				max: 100,
				stepSize: 20
            }
        }
	};

	constructor(){}
	ngOnInit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				console.log( questionnaire )
				this.questionnaire = JSON.parse( questionnaire );
				this.build_chart( JSON.parse( questionnaire ) );
			});
	}
	get_questionnaire_from_storage(): Promise<any>{
		return new Promise((resolve, reject)=>{
			resolve( localStorage.getItem('audit-ux') );
		})
	}

	build_chart( questionnaire ){
		this.charts_label = [];
		this.charts_datasets[0].data = [];

		for (var i = questionnaire.length - 1; i >= 0; i--) {
			this.charts_label.push( questionnaire[i].title );
			this.charts_datasets[0].data.push( questionnaire[i].percentage_rate );
		}
	}

	get_color( percentage ){
		if( percentage < 20 ){
			return '#ED4842'
		}else if( percentage > 20 && percentage < 50 ){
			return '#FFC74C'

		}else if( percentage > 50 && percentage < 100 ){
			return '#A6C34C'
			
		}else if( percentage == 100 ){
			return '#91C9E8'
		}
	}

}
