import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddMovieService {

  private apiUrl = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) { }
  
  addMovie(movieData: any){
    return this.http.post(this.apiUrl, movieData);
  }




}
