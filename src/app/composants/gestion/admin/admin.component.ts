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
  ajoutFormChambre: FormGroup;
  chambreForm: FormGroup;
  
  listChambre: Chambre[];
idHotel:number;
  affiche: boolean = false;
  showHotel:boolean = false; //afficher div de l'ajout d'hotel
  showChambre:boolean=false; //afficher div de l'ajout chambre
  hide() {
    if (this.affiche == true)
      this.affiche = false;

  }
  hideH() {
    if (this.showHotel== true)
      this.showHotel = false;

  }

  hideC() {
    if (this.showChambre == true)
      this.showChambre = false;

  }

  remplir(id:number,l: Chambre[]) {
    this.listChambre = l;
    this.affiche = true;
    this.idHotel=id;
  }
  img:FormGroup;
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



    this.ajoutFormChambre = this.fb.group({
      idch: [],
      type: [''],
      pu: [],
      clim:[],
      coffre:[],
      minib:[],
      surface:[],
      nblit:[],
      nbpers:[],
      couvertchamb: ['']

    })


    this.opt = this.fb.group(
      {
        vueMer: false,
        wifigrat:false,
        jaquzi: false,
        stade: false,
        parkgrat: false,
        divertisement: false,
        offre: false,
        mesuresec: false,
        anulationgrat: false,
        Servicedemenaj: false

      }
    )
   
  }


showH(){
  if(this.showHotel == false)
  this.showHotel = true;
  else
  this.showHotel = false;
}

indexChambre:number=-1; //index de la chambre a ete selectionner
showC(i:number){
  this.indexChambre=i;
  this.showChambre = true;

}

AjouterHotel()
{
  this.hotelservice.createHotel(this.ajoutForm.value,this.opt.value)
  .subscribe(data =>{ this.Ghotel.push(data);});;
}
/*
reset() {
  this.ajoutForm.reset();
  this.opt.reset()
}
*/

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
let i=this.h.chambre.findIndex(l=> l.idch == idch);
this.h.chambre.splice(i, 1);

  this.hotelservice.modifier(this.idHotel,this.h)
  .subscribe(
    livre => {
    let pos = this.Ghotel.findIndex(l=> l.id == this.idHotel)
    this.Ghotel[pos]= this.h;   
    }
    )
}


onAjoutChambre()
{
  this.h=this.Ghotel.find (l=>l.id==this.idHotel);

    this.h.chambre.push( {...this.ajoutFormChambre.value,
      opt:{...this.opt.value}});
  
  
  this.hotelservice.modifier(this.idHotel,this.h)
  .subscribe(
    livre => {
    let pos = this.Ghotel.findIndex(l=> l.id == this.idHotel)
    this.Ghotel[pos]= this.h;   
    }
    )
}

onModifierChambre(i:number){

  this.h=this.Ghotel.find (l=>l.id==this.idHotel);
 
 

  this.h.chambre[i]={...this.ajoutFormChambre.value,
    opt:{...this.opt.value}};
  


    this.hotelservice.modifier(this.idHotel,this.h)
    .subscribe(
      livre => {
      let pos = this.Ghotel.findIndex(l=> l.id == this.idHotel)
      this.Ghotel[pos]= this.h;   
      }
      )
  }
}

