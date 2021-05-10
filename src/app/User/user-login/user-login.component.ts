import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthenticationService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(logInForm : NgForm){
    console.log(logInForm.value);
    const token = this.authService.authUser(logInForm.value);
    if(token){
      localStorage.setItem('token', token.userName)
      this.alertify.success("Login Successfull!");
      this.router.navigate(['/']);
    }
    else
    this.alertify.error("Login Failed!");

  }

}
