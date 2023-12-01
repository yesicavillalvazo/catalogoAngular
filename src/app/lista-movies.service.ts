import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  title: string;
  cover: string;
  year: number;
  synopsis: string;

}

@Injectable({
  providedIn: 'root'
})


export class ListaMoviesService {

  private apiUrl = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

}
