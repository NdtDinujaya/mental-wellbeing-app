import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  recommendations: string[] | null = null;

  private apiUrl = 'http://localhost:8080/api/recommendations/generate';


  constructor(private http: HttpClient) {}

  submitAnswers(answers: string[]): Observable<string[]> {
    const userId = '1'; // Replace this with the actual user ID
    const url = `http://localhost:8080/api/recommendations/generate/${userId}`;
    return this.http.post<string[]>(url, answers);
  }

  // getRecommendations(userId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${userId}`);
  // }

  getRecommendations(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`).pipe(
      tap((response) => console.log('API response:', response)),
      catchError(this.handleError('getRecommendations', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}