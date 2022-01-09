import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week_3_project_2';
  even_number_list: number[] = []; 
  odd_number_list: number[] = []; 

  oddNumberEvent(num : number) {
    this.odd_number_list.push(num); 
  }

  evenNumberEvent(num : number) {
    this.even_number_list.push(num); 
  }

}
