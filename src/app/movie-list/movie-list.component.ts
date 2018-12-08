import { Component } from '@angular/core';
import { omdbService } from '../services/omdb.service';



@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  imdbID = '';
  result = [];
  id = [];
  newResults = [];
  movie = {};
 

  searchMovie(title: String) {
    this.OmdbService.searchMovieByTitle(title)
     .subscribe((result) => {  this.result = result;
        for (let i = 0; i < 10 ; i++) {
        this.id.push(this.searchMovieByImdbID(result.Search[i].imdbID));
           }});
}

searchMovieByImdbID(imdbID: String) {
  this.OmdbService.searchMovieByImdbID(imdbID).subscribe((result) => {
    this.result = result;
    this.newResults.push(result);
  });
 }

  constructor( private OmdbService: omdbService ) {   }

  

}
