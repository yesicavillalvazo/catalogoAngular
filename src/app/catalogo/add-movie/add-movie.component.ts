import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddMovieService } from 'src/app/add-movie.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})


export class AddMovieComponent  {
  //Este pedazo avisa los inputs en el html de los cuales tomaremos sus valores.
  title = new FormControl('');
  year = new FormControl('');
  synopsis = new FormControl('');
  cover = new FormControl('');

  //Este pedazo indica que vamos a necesitar la fucionalidad incluida en ese servicio (es decir, enviar datos al backend)
  //Por tanto, estamos inyectando el servicio.
  constructor (private add_Movie: AddMovieService) {}

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
}


