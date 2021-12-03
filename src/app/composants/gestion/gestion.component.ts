import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  Ghotel:Hotel[];

  constructor(private hotelservice:HotelsService) { }


  

  ngOnInit(): void {
     this.hotelservice.getHotels()
    .subscribe(
      data => this.Ghotel = data
    );
  }

}
