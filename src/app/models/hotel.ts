import {Option} from  'src/app/models/option';
import {Chambre} from  'src/app/models/chambre';

export class Hotel {
    
    constructor (
        public id:number,
        public name:string,
        public ville:string,
        public imagecouvert:string,
        public opt:Option,
        public prix:number,
        public nbetoile:number,
        public chambre:Chambre[],
        public image:string[]) {}
}
