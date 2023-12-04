import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMovieService } from 'src/app/add-movie.service';
import { ListMoviesComponent } from '../list-movies/list-movies.component';
import { ListaMoviesService } from 'src/app/lista-movies.service';
import { ViewMovieService } from 'src/app/view-movie.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})


export class AddMovieComponent implements OnInit  {
  //Este pedazo avisa los inputs en el html de los cuales tomaremos sus valores.
  id = new FormControl('');
  title = new FormControl('');
  year = new FormControl('');
  synopsis = new FormControl('');
  cover = new FormControl('');

  pelicula = {
    id: '',
    title: '',
    cover: '',
    year: '',
    synopsis: ''
  };

  //Este pedazo indica que vamos a necesitar la fucionalidad incluida en ese servicio (es decir, enviar datos al backend)
  //Por tanto, estamos inyectando el servicio.
  constructor (
    private add_Movie: AddMovieService, 
    private activatedRoute: ActivatedRoute) {}

  addMovie(){
    //Este método indica que va a pasar cuando el usuario haga clic en nuestra vista y dispare el evento clic 

    const movieData = {
      title: this.title.value,
      year: this.year.value,
      synopsis: this.synopsis.value,
      cover: this.cover.value
    };
    //El método crea un objeto con los valores ingresados en el [formControl] y los guarda en movieData

  this.add_Movie.addMovie(movieData).subscribe(result => {
  console.log ("datos enviados");
  
    confirm("Pelicula Enviada");
    //

    });

  }

  ngOnInit(): void{
    this.cargar();
  
    }
    
    cargar(): void{
    
      this.activatedRoute.params.subscribe(
        e=>{
          let id=e['id'];
          if(id){
            this.add_Movie.getMovieById(id).subscribe(
              es=>this.pelicula=es
            );
          }
        }
      );
  
    }
 
  


}


