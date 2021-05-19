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

  getAllProperties(SellRent:number): Observable<IPropertyBase[]>{
    return this.http.get('/data/porperties.json').pipe(
      map(data=>{
        const propertiesArray : Array<IPropertyBase> = [];

        for(const id in data){
          //  console.log("data: "+ data[id].Name+ " value: " + data[id].SellRent);
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
             }
        }
         return propertiesArray;
      })
    );

    return this.http.get<Iproperti[]>('/data/porperties.json');
  }

  addProperty(property: Property){
    localStorage.setItem('newProp', JSON.stringify(property));
  }


}
