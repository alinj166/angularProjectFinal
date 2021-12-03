
import {Option} from  'src/app/models/option';
export class Chambre {

    constructor(
        public idch:number,
        public type:string,
        public pu:number,
        public clim:boolean,
        public coffre:boolean,
        public minib:boolean,
         public surface:number,
          public nblit:number, 
          public nbpers:number,
         public option:Option,
         public couvertchamb:string
          ){}
}
