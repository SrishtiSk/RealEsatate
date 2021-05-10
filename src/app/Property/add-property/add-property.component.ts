import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})


export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm : NgForm;
  @ViewChild('FormTabs') staticTabs: TabsetComponent;


  //will come from master DB
  propertyType:Array<string>=['House', 'Apartment', 'Duplex'];
  furnishType:Array<string>=['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  //  // this.addPropertyForm.controls['Name'].setValue('Default Value');
  //   setTimeout(()=>{
  //       this.addPropertyForm.controls['Name'].setValue('Default Value');
  //   });

  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){
    console.log("Submitted");
    console.log(this.addPropertyForm)
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
