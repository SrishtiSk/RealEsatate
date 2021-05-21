import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { IPropertyBase } from '../model/IPropertyBase';
import { Iproperti } from '../model/Ipropertyi';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id:number){

    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p=>p.Id === id);
      })
    );
  }

  getAllProperties(SellRent?:number): Observable<IPropertyBase[]>{
    return this.http.get('/data/porperties.json').pipe(
      map(data=>{
        const propertiesArray : Array<IPropertyBase> = [];

        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if(localProperties){
          for(const id in localProperties){
            if(SellRent){
              if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent){
                propertiesArray.push(localProperties[id]);
               }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for(const id in data){
          //  console.log("data: "+ data[id].Name+ " value: " + data[id].SellRent);
          if(SellRent){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
         return propertiesArray;
      })
    );

    return this.http.get<Iproperti[]>('/data/porperties.json');
  }

  addProperty(property: Property){
    let newProp = [property];

    //add new peoperty in array if newProp already exists iin local storage
    if(localStorage.getItem('newProp')){
      newProp = [property,
                ...JSON.parse(localStorage.getItem('newProp'))]
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropId(){
    if(localStorage.getItem("PID")){
      localStorage.setItem('PID', String(localStorage.getItem('PID')+1));
      return localStorage.getItem("PID");
    }
    else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
