import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//tengo que agregar el ID de la movie aqui?

  
@Injectable({
  providedIn: 'root'
})

export class ViewMovieService {
  private apiUrl = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) { }

  //es necesario tener el metodo para jalar todas las movies?
  //getMovies(): Observable<Movie[]> {
    //return this.http.get<Movie[]>(this.apiUrl);
  
  getMovieById(id: number): Observable <any> {
    return this.http.get('${this.apiUrl}/${id}');
  }


}
