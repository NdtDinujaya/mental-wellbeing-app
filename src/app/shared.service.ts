import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private recommendations: any[] = [];

  constructor() {}

  setRecommendations(recommendations: any[]): void {
    this.recommendations = recommendations;
  }

  getRecommendations(): any[] {
    return this.recommendations;
  }
}
