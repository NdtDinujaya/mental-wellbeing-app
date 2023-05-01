import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  userId: number;
  recommendations: any[] = [];
  questions = [
    {
      question: 'What aspects of your mental well-being are you most concerned about?',
      answers: [
        'Feelings of inadequacy related to your life or appearance',
        'Fear of missing out (FOMO)',
        'Social media addiction',
        'Feelings of isolation or loneliness',
        'Depression and anxiety',
        'Experiencing cyberbullying',
        'Tendency for self-absorption or narcissism',
      ],
    },
    {
      question: 'Which areas would you like to focus on for personal improvement?',
      answers: [
        'Enhance overall mental health',
        'Reduce dependency on social media',
        'Boost self-mot Gain knowledge on mental health improvement strategies',
      ],
    },
    {
      question: 'Do you want to be Anonymous?',
      answers: ['Yes', 'No'],
    },
  ];

  answers: string[] = [];

  // constructor(private route: ActivatedRoute, private recommendationsService: RecommendationsService) {
  //   this.userId = +this.route.snapshot.paramMap.get('userId')!;
  // }

  ngOnInit(): void {}

  // submitAnswers() {
  //   this.recommendationsService.submitAnswers(this.answers).subscribe((recommendations) => {
  //     console.log(recommendations);
  //   });
  // }

  constructor(private recommendationsService: RecommendationsService, private sharedService: SharedService, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.paramMap.get('userId')!;
   }

submitAnswers() {
  this.recommendationsService.submitAnswers(this.answers).subscribe((recommendations: any[]) => {
    console.log(recommendations);
    this.sharedService.setRecommendations(recommendations);
    this.recommendations = recommendations;
  });
}
  //

  

}
