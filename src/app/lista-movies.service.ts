import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: string;
  title: string;
  cover: string;
  year: number;
  synopsis: string;

  //Definir movies array?
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
  
  deleteMovie(id: string | undefined): Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
  }


}
