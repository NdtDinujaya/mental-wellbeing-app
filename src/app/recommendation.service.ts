import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private baseUrl = 'http://localhost:8080/api/recommendations/generate'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getRecommendations(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

}
