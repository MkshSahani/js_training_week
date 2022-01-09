import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName: string = "MukeshSahani"; 
  appName: string = "First angular app"; 
  myCSSclass: string = "red"; 
  applyCSSclass:boolean = false;
  applyBlueClass:boolean = true;  
  testColor:string = "brown";

  constructor() { }

  ngOnInit(): void {
  }

  showData($event : any) : void{
    console.log("button is clicked"); 
    if($event) {
      console.log($event.target); 
      console.log($event.target.value); 
    }
  }

}
