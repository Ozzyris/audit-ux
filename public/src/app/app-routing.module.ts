import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// VIEWS
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';

const routes: Routes = [
	{ path: 'questionnaire', component: QuestionnaireComponent, data: { title: 'Audit UX' } },
	{ path: '', redirectTo: 'questionnaire', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
