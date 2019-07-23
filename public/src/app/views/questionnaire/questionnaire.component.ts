import { Component, OnInit } from '@angular/core';
import { QUESTIONNAIRE_WEB } from '../../../assets/json/questionnaire_web';
import { QUESTIONNAIRE_MOBILE } from '../../../assets/json/questionnaire_mobile';
import { Router, ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
	all_question: any ;
	current_section: number = 0;
	history: any = [];
	breadcrumbs: any = [];
	display_previous_audit: boolean = false;

	constructor( private router: Router, private route: ActivatedRoute ){}
	ngOnInit(){
		this.get_questionnaire_type();
		this.check_previous_audit();
	}

	@HostListener('document:keypress', ['$event'])
		handleKeyboardEvent(event: KeyboardEvent) { 
			if(event.key == 'Enter'){
				this.goto_next();
			}
		}

	//QUESTIONNAIRE TYPE
	get_questionnaire_type(): void{
		this.route.params.subscribe( params => {
			
			console.log(params.type);
			if( params.type == 'mobile' ){
				this.all_question = QUESTIONNAIRE_MOBILE;
			}else if( params.type == 'web' ){
				this.all_question = QUESTIONNAIRE_WEB;
			}else if( params.type == 'other' ){}

			var array_all_question: any = Object.values(this.all_question)
			for (var i = array_all_question.length - 1; i >= 0; i--) {
				this.breadcrumbs.push(array_all_question[i].title);
			}

			this.launch_audit();
		})
	}

	//RESURECTION
	check_previous_audit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				if(questionnaire != null){
					this.display_previous_audit = true;
				}else{
					this.launch_audit();
				}
			});
	}
	delete_previous_audit(){
		localStorage.removeItem("audit-ux");
		this.display_previous_audit = false;
		this.launch_audit();
	}

	launch_audit(){
		if(this.history.length == 0 ){
			console.log( this.history );
			this.build_next_section( 'section-1' );
			this.build_next_question( 'section-1', 'question-1' );
		}
	}
	ressurect_previous_audit(){
		this.get_questionnaire_from_storage()
			.then( questionnaire => {
				this.display_previous_audit = false;
				let questionnaire_json = JSON.parse( questionnaire );
				console.log(questionnaire_json);
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
				next_question = block[1],
				current_section_name = 'section-'+(this.current_section +1);

			console.log(block, next_section, next_question, current_section_name);
			
			if( current_section_name != next_section){
				if( nb_of_section == (this.current_section+1)){
					console.log('right');
					this.build_next_section( next_section );
					this.current_section ++;
					this.build_next_question( next_section, next_question );
				}else{
					console.log('wrong 1');
					this.current_section ++;
				}
			}else{
				console.log('wrong 2');
				this.build_next_question( next_section, next_question );
			}
		}

		console.log(this.all_question)
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
		this.history[this.current_section].questions.push( this.all_question[next_section].questions[next_question] );
	}
	build_next_section( next_section ){
		this.history.push({
			'title': this.all_question[next_section].title,
			'subtitle': this.all_question[next_section].subtitle,
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
