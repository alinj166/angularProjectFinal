export class Option {

    //class des  option disponible dans un hotel  
    constructor(public vueMer:boolean, //vue sur mer
        public wifigrat:boolean, //wifi gratuit
        public parkgrat:boolean, //parking gratuit 
        public stade:boolean, //stade 
        public jaquzi:boolean, //jacuzzi
        public divertisement:boolean, 
        public offre:boolean, //offre 
        public Servicedemenaj:boolean, //service de menage 
        public mesuresec:boolean, //messure de sécurite 
        public anulationgrat:boolean){} //annulation gratuit 
}
