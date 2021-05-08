import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import *as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  user: User;
  userSubmitted :boolean;

  constructor(private fb:FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPW: new FormControl(null, Validators.required),
    //   mobileNo: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // },
    // this.passwordMatchingValidator
    // );
    this.CreateRegistrationForm();
  }

  CreateRegistrationForm(){
    this.registrationForm= this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPW: [null, Validators.required],
      mobileNo: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    },
    {validators:this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPW').value ? null : {notmatched: true};

  }

  //getter methods for all formcontrols
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
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      alertify.success("Congrats, You are successfully registered");
    }else{

      alertify.error("Kindly provide the required fields!");


    }
  }

  userData():User{
    return this.user={
      userName:this.UserName.value,
      email: this.Email.value,
      password: this.Password.value,
      mobileno: this.MobileNo.value
    }
  }




}
