import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
        private router: Router,
        private housingService: HousingService) { }

  public propertyId : number;
  property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.propertyId = +this.route.snapshot.params['id']; //+ aacts like Number() explisit converter
    this.route.data.subscribe(
      (data:Property)=>{
        this.property = data['prp']
      }
    )
    // //pagination
    // this.route.params.subscribe(
    //   (params) =>{
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }
    //     );

    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
    ];

    this.galleryImages = [
      {
        small: '/assets/Images/Interier-room.png',
        medium: '/assets/Images/Interier-room.png',
        big: '/assets/Images/Interier-room.png'
      },
      {
        small: '/assets/Images/Interier-room2.png',
        medium: '/assets/Images/Interier-room2.png',
        big: '/assets/Images/Interier-room2.png'
      },
      {
        small: '/assets/Images/Interier-kitchen.png',
        medium: '/assets/Images/Interier-kitchen.png',
        big: '/assets/Images/Interier-kitchen.png'
      },
      {
        small: '/assets/Images/Interier-staircase.png',
        medium: '/assets/Images/Interier-staircase.png',
        big: '/assets/Images/Interier-staircase.png'
      },
      {
        small: '/assets/Images/Interier-staircase2.png',
        medium: '/assets/Images/Interier-staircase2.png',
        big: '/assets/Images/Interier-staircase2.png'
      },

    ];
  }




}
