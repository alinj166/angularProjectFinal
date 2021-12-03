import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detailhot',
  templateUrl: './detailhot.component.html',
  styleUrls: ['./detailhot.component.css']
})
export class DetailhotComponent implements OnInit {
  hotel:Hotel;
  identifiants:number; 
  constructor(private hotelservice:HotelsService,private activatedRoute:ActivatedRoute,private router:Router) {}
  onClick(i:number)
  {
  this.router.navigate(['/detailhot',this.hotv[i].id]);
  
  }
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
    hotv:Hotel[];
  ngOnInit(): void {
   this.identifiants= this.activatedRoute.snapshot.params['id'];
    this.hotel=this.hotelservice.GethotelByid(this.identifiants);
      this.galleryOptions = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: this.hotel.image[0],
              medium: this.hotel.image[0],
              big: this.hotel.image[0]
          },
          {
              small: this.hotel.image[1],
              medium:this.hotel.image[1],
              big: this.hotel.image[1]
          },
          {
              small: this.hotel.image[2],
              medium: this.hotel.image[2],
              big: this.hotel.image[2]
          },
          {
            small: this.hotel.image[3],
            medium: this.hotel.image[3],
            big: this.hotel.image[3]
        },
        {
            small: this.hotel.image[4],
            medium: this.hotel.image[4],
            big: this.hotel.image[4]
        },
        {
            small: this.hotel.image[5],
            medium: this.hotel.image[5],
            big: this.hotel.image[5]
        }
       
      ];
      this.hotv=this.hotelservice.GethotelByVille(this.hotel.ville);
  }

}
