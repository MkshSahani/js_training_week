import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = ""; 
  @Output() login = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  submit($event : any) {
    console.log($event); 
    console.log(this.userName); 
    this.login.emit(this.userName);
  }

}
