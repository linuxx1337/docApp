import { Component, OnInit } from '@angular/core';

// Models
import { Doctor } from '../../models/doctor';
import { Task } from '../../models/task';

// Services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  tasks: Task[];
  //userId: number;

  constructor(private data: DataService) {
    this.getView();
    //this.getDoctor();
   }

   getView() {
    this.data.getDoctors()
    .subscribe( doctors => {this.doctors = doctors})

    this.data.getTasks()
     .subscribe( tasks => {this.tasks = tasks; this.setTask()} )
  }

  setTask() {
    if (this.doctors && this.tasks) {
      for(const doctor of this.doctors) {

        doctor.tasks=[]; // <---- dont forget this!! :D

        for(const task of this.tasks) {
          if (doctor.id === task.userId) {
            doctor.tasks.push(task)
          }
        }
      }
    }
  }

  /* On button click show tasks by doctor id 
    getDoctor() {
      this.data.getDoctors()
      .subscribe( doctors => {this.doctors = doctors})
    }

    linkto(userId: number){
      this.showTasksById(userId);
      console.log(userId)
    }

    showTasksById(userId: number) {
      this.data.getTasksById(userId)
      .subscribe( tasks => {this.tasks = tasks})
      console.log(this.tasks)
    }
  */

  ngOnInit() {
  }

}
