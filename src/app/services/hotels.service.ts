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
  constructor(private http:HttpClient) { }
  hotels:Hotel[] ;
  

  
  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(URL);
  }
  
  public createHotel(hotel:Hotel, opt:Option){
    hotel ={
      ...hotel,
      opt:{...opt}  ,
      chambre:[],
      image:[
        "assets/album/galery-movenpique/1.jpg",
    "assets/album/galery-movenpique/2.jpg",
    "assets/album/galery-movenpique/3.jpg",
    "assets/album/galery-movenpique/4.jpg",
    "assets/album/galery-movenpique/5.jpg",
    "assets/album/galery-movenpique/8.jpg" 
      ]
    }

    return this.http.post<Hotel>(URL,hotel);
  }

  GethotelByid(id:number){
    this.getHotels().subscribe (data => this.hotels = data)
   
    return this.hotels.find(h => h.id == id);
  }

  GethotelByVille(ville:string){
    this.getHotels().subscribe (data => this.hotels = data)
    return this.hotels.filter(h => h.ville ==ville);
  }
  
  
 
 deleteHotel(id:number)
  {
return this.http.delete(URL+"/"+id);
  }
  modifier(id:number,h:Hotel):Observable<Hotel>{
    return this.http.put<Hotel>(URL+"/"+id, h);
  }
 
  

}
