import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm } from '@angular/forms';
import { Chambre } from 'src/app/models/chambre';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  dateD:Date;
  dateF:Date;
  @Input()chamb:Chambre;
  tarif: number;
  day1:Date;
  day2:Date;
  constructor() { }

  difference(date1:Date, date2:Date) {  
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const day = 1000*60*60*24;
    return(date2utc - date1utc)/day
  }
  CalculOff(f:NgForm){
   
    if(f.value['dateDep']!="" && f.value['dateFin']!="" && this.chamb.option.offre){
      var date1 = new Date(f.value['dateDep']);
     var date2 = new Date(f.value['dateFin']);
      this.tarif= this.difference(date1,date2)*(0.4*this.chamb.pu);
    
    }
    else{
      var date1 = new Date(f.value['dateDep']);
     var date2 = new Date(f.value['dateFin']);
       this.tarif = this.chamb.pu *this.difference(date1,date2);
     
    }
     
  }
  ngOnInit(): void {
  
  }


}
