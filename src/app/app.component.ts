import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyComponent } from './survey/survey.component';
import { ResultComponent } from './result/result.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mental-wellbeing-app';

  @ViewChild(SurveyComponent) surveyComponent!: SurveyComponent;
  @ViewChild(ResultComponent) resultComponent!: ResultComponent;


  ngOnInit() {
  }

  isSubmitted: boolean = false;

  onSurveySubmit() {
    this.isSubmitted = true;
  }
}
