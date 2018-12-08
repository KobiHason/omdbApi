
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';



@Injectable()


export class omdbService {



searchMovieByTitle(title: String) {
  const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=da53126b';
return this.http.get(url).map( (response: Response ) => {
   return response.json();
 } );

}

searchMovieByImdbID(imdbID: String) {
  const movieUrl = 'http://www.omdbapi.com/?i=' + imdbID + '&apikey=da53126b';
  return this.http.get(movieUrl).map( (response: Response ) => {
    return response.json();
  }  );
}




constructor (private http: Http) { }

}
