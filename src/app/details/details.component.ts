import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
id:string=''; 
detailsMovies:any={};
  constructor(private _ActivatedRoute:ActivatedRoute ,private _TrendingService:TrendingService) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _TrendingService.getDetails(this.id).subscribe((data)=>{
this.detailsMovies=data;
console.log(this.detailsMovies);
    })
   }

  ngOnInit(): void {
  }

}
