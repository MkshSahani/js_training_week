import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isLogin: boolean = false; 
  isLogout: boolean = true; 
  list = [1, 2, 3, 4, 5]; 
  name:string = "Mukesh";
  
  constructor() { }

  ngOnInit(): void {
  }

}
