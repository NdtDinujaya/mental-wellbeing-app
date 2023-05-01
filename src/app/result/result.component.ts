import { Component, Input, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';
import { ActivatedRoute } from '@angular/router';
import { RecommendationService } from '../recommendation.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() userId: number = 1;
  recommendations: any[] = [];

  @Input() isSubmitted: boolean = false;


  // constructor() {}

  // ngOnInit(): void {
  //   console.log('ngOnInit called with userId:', this.userId);
  //   if (this.isSubmitted) {
  //     try {
  //       this.fetchRecommendations();
  //       console.log("Hello")
  //     } catch (error) {
  //       console.error('Error in ngOnInit:', error);
  //     }
  //   }
  // }

  fetchRecommendations(): void {
    this.recommendationService.getRecommendations(this.userId).subscribe(
      (data: any[]) => {
        console.log('Fetched recommendations:', data);
        this.recommendations = data;
        console.log("Hello" + this.recommendations);

      },
      (error) => {
        console.error('Error fetching recommendations:', error);
      }
    );
  }

 // recommendations: any[] = [];

constructor(private sharedService: SharedService, private recommendationService: RecommendationService) {}

ngOnInit(): void {

  console.log("Results " + this.recommendations );
  this.recommendations = this.sharedService.getRecommendations();
}
}