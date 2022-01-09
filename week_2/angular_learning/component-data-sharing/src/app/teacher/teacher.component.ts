import { Component, OnInit } from '@angular/core';
import  { Teacher } from '../teacher'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers : Teacher[] = [
    {
      name : 'Mukesh', 
      subject : 'OS'
    }, 
    
    {
      name : 'Satvik', 
      subject : 'CPP'
    }, 

    {
      name : 'Ishan', 
      subject : 'DBMS'
    }
  ]; 

  principle: string = "Mukesh";

  constructor() { }

  ngOnInit(): void {
  }

}
