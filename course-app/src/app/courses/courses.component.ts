import { Course } from './course/course.component';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Angular Courses Available"
  courseName;
  courses: Array<Course>
  courseId : number
  
  constructor(private coursesService : CoursesService,
              private activatedRoute : ActivatedRoute,
              private router : Router
            ){
      this.courses = coursesService.getCourses()
  }

  ngOnInit(){

    this.router.navigate(["course",1313],
    {queryParams : {name : "Angular",
                    language : "Javascript",
                    price : 300
                    }});

    this.activatedRoute.params.subscribe(param => {
      console.log("Only Param",param)
    })
    this.activatedRoute.paramMap.subscribe(params => {
      console.log('Courses Params', params)
      this.courseId = +params.get('courseId')
    })

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
        console.log("Query Params", queryParams)
    })


    //Calling the HttpService
    this.coursesService.getTodos()
                      .subscribe(
                        success => {
                          console.log("Todo in courses", success);
                      },
                      error => {
                          console.log("Error Recieved", error)
                          
                      })
  }

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
