import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellrent = 1;
  properties: IPropertyBase[];
  Today = new Date();
  City='';
  SearchCity = '';
  SortbyParam = 'City';
  SortDirection ='asc';

  constructor(private route:ActivatedRoute, private housingService:HousingService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.sellrent = 2; //2 Means we are on rent-property URL else we are in base URl
    }

    this.housingService.getAllProperties(this.sellrent).subscribe(
      data=>{
        this.properties = data;

        // const newProperty = JSON.parse(localStorage.getItem('newProp'));
        // if (newProperty.SellRent === this.sellrent){
        //   this.properties = [newProperty, ...this.properties];
        // }

        console.log(data);
        // console.log(this.route.snapshot.url.toString());

      },error =>{
        console.log('httperror:');
        console.log(error);
      }
    );
  }

  onCityFilter(){
    this.SearchCity = this.City;
  }
  onCityFilterClear(){
    this.SearchCity = '';
    this.City= '';
  }
  onSortDirection(){
    if(this.SortDirection === 'desc')
      this.SortDirection = 'asc';
    else
      this.SortDirection ='desc';
  }

}
