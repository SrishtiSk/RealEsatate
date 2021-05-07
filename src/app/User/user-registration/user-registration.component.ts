import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPW: new FormControl(null, Validators.required),
      mobileNo: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    },
    this.passwordMatchingValidator
    );

    this.registrationForm.controls['userName'].setValue('Default Value');
  }


  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPW').value ? null : {notmatched: true};

  }


  //getter methods as formcontrols
  get UserName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get Email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get Password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get ConfirmPW(){
    return this.registrationForm.get('confirmPW') as FormControl;
  }
  get MobileNo(){
    return this.registrationForm.get('mobileNo') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
