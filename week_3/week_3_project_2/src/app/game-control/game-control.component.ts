import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  num: number = 0; 
  @Output() even = new EventEmitter<number>(); 
  @Output() odd = new EventEmitter<number>(); 
  timeRunner: any = null; 
  constructor() { }

  ngOnInit(): void {
  }

  start() {
    console.log("start");
    this.timeRunner = setInterval(
      () => {
        this.num += 1; 
        if(this.num % 2 == 0) {
          console.log(this.num); 
          this.even.emit(this.num); 
        } else {
          console.log(this.num); 
          this.odd.emit(this.num); 
        }
      }, 1000
    )
  }

  stop(){
    console.log("stop");
    clearInterval(this.timeRunner);
  }



}
