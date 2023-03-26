import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { GuardGuard } from './guard.guard';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
{path:'',redirectTo:"home",pathMatch:"full"},
{path:"home",canActivate:[GuardGuard] ,component:HomeComponent},
{path:"tvshows", canActivate:[GuardGuard],component:TvShowsComponent},
{path:"people",canActivate:[GuardGuard] ,component:PeopleComponent},
{path:"details/:id",canActivate:[GuardGuard] ,component:DetailsComponent},
{path:"register/login",redirectTo:"login"},
{path:"login",component:LoginComponent},
{path:"movies",canActivate:[GuardGuard] ,component:MoviesComponent},
{path:"login/register",redirectTo:"register"},
{path:"register",component:RegisterComponent},
{path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
