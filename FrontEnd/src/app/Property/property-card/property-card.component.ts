import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

@Input() propertycard : IPropertyBase
@Input() hideIcons: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
