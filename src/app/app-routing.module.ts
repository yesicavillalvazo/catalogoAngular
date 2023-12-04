import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './catalogo/list-movies/list-movies.component';
import { ViewMovieComponent } from './catalogo/view-movie/view-movie.component';
import { AddMovieComponent } from './catalogo/add-movie/add-movie.component';
import { AppComponent } from './app.component';
import { IndexCatalogoComponent } from './catalogo/index-catalogo/index-catalogo.component';


const routes: Routes = [
  {path: '', component: IndexCatalogoComponent},
  {path: 'list-movies', component: ListMoviesComponent},
  {path: 'view-movie', component: ViewMovieComponent },
  {path: 'add-movie', component: AddMovieComponent},
  {path: 'add-movie/:id', component: AddMovieComponent}, //le pasamos el parametro de id
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
