import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  
productForm: FormGroup;

  hotel:Hotel[]=[];


  constructor(private fb: FormBuilder,private hotelservice:HotelsService) { }

  gethot(){
    this.hotelservice.getHotels();
  }

  ngOnInit(): void {

      this.productForm = this.fb.group({
      reference:[],
      libelle: [''],
      madeIn: ['Tunisie'],
      categorie: ['Accessoires'],
      nouveau : false
      })

  }

}
