import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//VIEWS
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';
import { ResultsComponent } from './views/results/results.component';

//PIPES
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';

//DIRECTIVES

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ResultsComponent,
    SanitizerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
