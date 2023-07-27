import { Component } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { LoggingComponent } from './logging/logging.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';
}
