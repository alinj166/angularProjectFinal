import { Injectable } from '@angular/core';
import { Chambre } from '../models/chambre';
import { Hotel } from '../models/hotel';
import {Option} from  'src/app/models/option';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels:Hotel[] ;
  

  
  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(URL);
  }
  

  GethotelByid(id:number){
    this.getHotels().subscribe (data => this.hotels = data)
   
    return this.hotels.find(h => h.id == id);
  }

  GethotelByVille(ville:string){
    this.getHotels().subscribe (data => this.hotels = data)
    return this.hotels.filter(h => h.ville ==ville);
  }
  
  
  constructor(private http:HttpClient) { }
}
