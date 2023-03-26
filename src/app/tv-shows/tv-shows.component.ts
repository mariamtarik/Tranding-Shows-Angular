import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  constructor( private _TrendingService:TrendingService) { }
  trendingTvshows:any[]=[];
getTvShows(){
  return this._TrendingService.getTrending("tv").subscribe((response)=>{
    this.trendingTvshows=response.results;
    console.log(this.trendingTvshows);
  });
  
}
  ngOnInit(): void {
    this.getTvShows();
  }

}
