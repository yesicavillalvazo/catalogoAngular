import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


  
@Injectable({
  providedIn: 'root'
})

export class ViewMovieService {
  private apiUrl = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) { }

  getMovieById(id: string): Observable<any> {
    return this.http.get('${this.apiUrl}/movies/${id}');
  }



}
