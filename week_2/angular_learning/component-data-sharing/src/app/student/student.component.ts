import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() teacher: Teacher = {
    name : "", 
    subject: ""  
  }

  @Input('principle') principleName: string = ""; 
  


  constructor() { }

  ngOnInit(): void {
    console.log(this.teacher.name);
  }

}
