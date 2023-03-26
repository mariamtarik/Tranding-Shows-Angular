import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvShowsComponent,
    LoginComponent,
    NavbarComponent,
    DetailsComponent,
    RegisterComponent,
  
    MoviesComponent,
    PeopleComponent,
    NotfoundComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule,CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
