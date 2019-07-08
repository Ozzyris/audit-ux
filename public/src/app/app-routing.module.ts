import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// VIEWS
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';
import { ResultsComponent } from './views/results/results.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: { title: 'Audit UX' } },
	{ path: 'questionnaire/:type', component: QuestionnaireComponent, data: { title: 'Audit UX' } },
	{ path: 'results', component: ResultsComponent, data: { title: 'Results Audit UX' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
