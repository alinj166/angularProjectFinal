import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chambre } from 'src/app/models/chambre';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private hotelservice: HotelsService, private fb: FormBuilder) { }
  Ghotel: Hotel[];
  ajoutForm: FormGroup;
  chambreForm: FormGroup;
  
  listChambre: Chambre[];
idHotel:number;
  affiche: boolean = false;
  show:boolean = false;
  hide() {
    if (this.affiche == true)
      this.affiche = false;

  }

  remplir(id:number,l: Chambre[]) {
    this.listChambre = l;
    this.affiche = true;
    this.idHotel=id;
  }

  opt: FormGroup;
  ngOnInit(): void {
    this.hotelservice.getHotels()
      .subscribe(
        data => this.Ghotel = data
      );
    this.ajoutForm = this.fb.group({
      id: [0],
      name: [''],
      ville: [''],
      imagecouvert: [''],
      nbetoile: ['', [Validators.required, Validators.maxLength(5)]],
      prix: ['']
    })
    this.opt = this.fb.group(
      {
        vueMer: true,
        wifigrat: true,
        jaquzi: true,
        stade: true,
        parkgrat: true,
        divertisement: true,
        offre: true,
        mesuresec: true,
        anulationgrat: true,
        Servicedemenaj: true

      }
    )
   
  }


showF(){
  if(this.show == false)
  this.show = true;
  else
  this.show = false;
}
AjouterHotel()
{
  this.hotelservice.createHotel(this.ajoutForm.value)
  .subscribe(data =>{ this.Ghotel.push(data);});;
}

reset() {
  this.ajoutForm.reset();
  this.opt.reset()
}


onSupprimerHotel(id:number)
{
this.hotelservice.deleteHotel(id)
.subscribe(
  ()=>this.Ghotel=this.Ghotel.filter(l=>l.id !=id)
);
}
h:Hotel;
onSupprimerChambre(idch:number)
{
this.h=this.Ghotel.find (l=>l.id==this.idHotel);
let i=this.h.chambre.findIndex(l=> l.idch == idch)
this.h.chambre[i]= undefined;
  this.hotelservice.deleteChambre(this.idHotel,this.h)
  .subscribe(
    livre => {
    let pos = this.Ghotel.findIndex(l=> l.id == this.idHotel)
    this.Ghotel[pos]= this.h;   
    }
    )
}
}

