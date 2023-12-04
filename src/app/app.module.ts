import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './catalogo/list-movies/list-movies.component';
import { ViewMovieComponent } from './catalogo/view-movie/view-movie.component';
import { AppRoutingModule } from './app-routing.module';
import { AddMovieComponent } from './catalogo/add-movie/add-movie.component';
import { IndexCatalogoComponent } from './catalogo/index-catalogo/index-catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    ViewMovieComponent,
    AddMovieComponent,
    IndexCatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
