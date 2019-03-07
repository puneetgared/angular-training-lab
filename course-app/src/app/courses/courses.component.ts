import { Course } from './course/course.component';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Angular Courses Available"
  courseName;
  courses: Array<Course>
  
  constructor(private coursesService : CoursesService){
      this.courses = coursesService.getCourses()
  }

  ngOnInit(){}

  coursesKeyUp($event){
    // this.courseName = $event.target.value;
    console.log('Courses Key up',$event.target.value,this.courseName);
  }

  addCourses(){
    this.courses.push(<Course>{
        name : this.courseName,
        author : 'Fidelity',
        price : 50000000,
        location : 'London'
    });
  }

  delete(index){
    this.courses.splice(index,1);
  }

  courseSelected($event){
    console.log('course Selected Outside',$event)
  }


}
