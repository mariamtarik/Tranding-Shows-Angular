import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
@Input() trendingMovies:any[]=[];
  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    mouseDrag: true,
    margin:8,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
