import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

getTrending(mediaType:any):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
}
getDetails(id:any):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
}


}
