import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingMovies:any[]=[];
getTrendigMovies(){
  return this._TrendingService.getTrending("movie").subscribe((response)=>{
  this.trendingMovies=response.results;
  console.log(this.trendingMovies)
  })

}
  ngOnInit(): void {
    this.getTrendigMovies();
  }

}
