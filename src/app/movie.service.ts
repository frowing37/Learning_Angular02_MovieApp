import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movieDataSource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService : LoggingService) {}

  getMovies(): Observable<Movie[]>{
    this.loggingService.add('Complete Logging');
    return of(Movies);
  }

}
