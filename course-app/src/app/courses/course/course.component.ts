import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Course {
  name : string,
  author : string,
  price : number,
  location : string,
  description : string
}

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('course') course : Course;
  @Output('selected') selected = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  courseSelected(){
    console.log('course is Selected Inside')
    this.selected.emit(this.course);
  }

}
