import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  username: string; 
  emptystring: boolean; 
  constructor() { 
    this.username = ""; 
    this.emptystring = true; 
  }

  ngOnInit(): void {
  }

  checkUserNameString($event : any){
    if(this.username == "") {
      this.emptystring = true; 
    } else {
      this.emptystring = false;  
    }
  }

}
