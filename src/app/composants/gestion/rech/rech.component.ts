import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-rech',
  templateUrl: './rech.component.html',
  styleUrls: ['./rech.component.css']
})
export class RechComponent implements OnInit {

  constructor(private hotelservice: HotelsService) { }
  listh: Hotel[];
  firstName:string;
  search(){
   
    return this.listh.filter(hot => {
       console.log(hot.name.toLocaleLowerCase().match(this.firstName?.toLocaleLowerCase()));
       return hot.name?.toLocaleLowerCase().match(this.firstName?.toLocaleLowerCase())
       
     });
   
 }
  ngOnInit(): void {
      this.hotelservice.getHotels().subscribe(data => this.listh = data);
  }

}
