import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  
  ville:boolean = false;
 
  onReset(f:NgForm){
   
    f.resetForm(); 

  }
  firstName:any;
  
 
  
  
  constructor(private hotelservice:HotelsService) { }
  hotils:Hotel[]=[];
  
  villes = [
    "Nabeul",
    "Mounastir",
    "Gafsa",
    "Sousse",
    "Mahdia",
    "Tbarka",
    "Gasrine",
    "Tunis"
  ];

  etoiles = [1,2,3,4,5];

  ngOnInit(): void {
    this.hotelservice.getHotels()
    .subscribe (data => this.hotils = data)
  }
  hot=this.hotils;
  search(){
   
     return this.hotils.filter(hot => {
        console.log(hot.name.toLocaleLowerCase().match(this.firstName?.toLocaleLowerCase()));
        return hot.name?.toLocaleLowerCase().match(this.firstName?.toLocaleLowerCase())
        
      });
    
  }

  

}
