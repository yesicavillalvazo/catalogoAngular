import { Component, OnInit } from '@angular/core';
import { ListaMoviesService } from 'src/app/lista-movies.service';
//maybe la src lo puedo quitar para que jale el path
import { Movie } from 'src/app/lista-movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})


export class ListMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor (private listaMoviesService: ListaMoviesService ) {}
  ngOnInit(): void {
    this.listaMoviesService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }
} 