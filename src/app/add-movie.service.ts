import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pelicula {
  id: number;
  title: string;
  cover: string;
  year: number;
  synopsis: string;

  //probar si es interface o class
}

@Injectable({
  providedIn: 'root'
})

export class AddMovieService {

  private apiUrl = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient) { }
  
  addMovie(movieData: any){
    return this.http.post(this.apiUrl, movieData);
  }

  //Toma pelicula por ID
  getMovieById(id: string): Observable<any> {
    console.log('API URL', this.apiUrl);
    console.log('Movie ID:', id);

    const url = `${this.apiUrl}${id}`;
    console.log('Full URL', url);

    return this.http.get(url);
  }
  //todo esto se debe meter cuando se haga el put
 




}


