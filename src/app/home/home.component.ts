import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[]=[];
  trendingTvshows:any[]=[];
  trendingPeople:any[]=[];
  constructor(private _TrendingService:TrendingService) {
_TrendingService.getTrending('movie').subscribe((data)=>{
  this.trendingMovies=data.results.slice(0,10);
});
_TrendingService.getTrending('tv').subscribe((data)=>{
  this.trendingTvshows=data.results.slice(0,10);
});
_TrendingService.getTrending('person').subscribe((data)=>{
  this.trendingPeople=data.results.slice(0,10);
});


   }



  ngOnInit(): void {

  }

}
