import { Component } from '@angular/core';
import { Movie } from '../movie';
import { Movies } from '../movieDataSource';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = 'Movie List';

  getTitle(){
    return this.title;
  }

  movie : Movie = {
    id : 1,
    name : 'Oppenhaimer'
  }

  movies = Movies;

}
