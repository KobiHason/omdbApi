import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { ModalService } from './services/modal.service';
import { omdbService } from './services/omdb.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';



import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
                          ])
  ],
  providers: [
    omdbService,
    ModalService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
