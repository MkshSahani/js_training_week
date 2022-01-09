import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userNameSet: boolean = false; 
  userName: string = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(user : string) {
    this.userNameSet = true;
    this.userName = user;

  }

}
