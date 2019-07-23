import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//EXTERNAL PACKAGE
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'ngx-moment';

//VIEWS
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';
import { ResultsComponent } from './views/results/results.component';
import { HomeComponent } from './views/home/home.component';

//PIPES
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';
import { GaugeConvertorPipe } from './pipes/gauge_convertor/gauge-convertor.pipe';

//DIRECTIVES

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ResultsComponent,
    SanitizerPipe,
    GaugeConvertorPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
