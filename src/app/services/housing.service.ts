import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../Property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(sellRent:number): Observable<IProperty[]>{
    return this.http.get('/data/porperties.json').pipe(
      map(data=>{
        const propertiesArray : Array<IProperty> = [];
        for(const id in data){
          // console.log("data: "+ data[id].Name+ " value: " + data[id].SellRent);
            if(data.hasOwnProperty(id) && data[id].SellRent === sellRent){
              propertiesArray.push(data[id]);
             }

        }
         return propertiesArray;
      })
    )
  }
}
