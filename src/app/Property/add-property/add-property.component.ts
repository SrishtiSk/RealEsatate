import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})


export class AddPropertyComponent implements OnInit {

  //@ViewChild('Form') addPropertyForm : NgForm;
  @ViewChild('FormTabs') staticTabs: TabsetComponent;

  addPropertyForm: FormGroup;

  //will come from master DB
  propertyType:Array<string>=['House', 'Apartment', 'Duplex'];
  furnishType:Array<string>=['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK :null,
    BuiltArea: null,
    City: null,
    RTM: null
  };

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  //  // this.addPropertyForm.controls['Name'].setValue('Default Value');
  //   setTimeout(()=>{
  //       this.addPropertyForm.controls['Name'].setValue('Default Value');
  //   });

    this.CreateAddPropertyFrom();

  }

  CreateAddPropertyFrom(){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required]

    })

  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Submitted");
    console.log("SellRent= "+ this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
