import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { User }  from "./../shared/models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userInfo = new User("guest","./assets/images/guest.png");
  constructor() { }

  // onLoginClick(): void{
  //   this.onLogin.emit("login");
  // }

  // onRegisterClick(): void{
  //   this.onRegister.emit("register");
  // }

  ngOnInit() {
    console.log(this.userInfo.fullName)
  }

}
