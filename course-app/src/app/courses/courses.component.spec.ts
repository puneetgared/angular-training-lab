import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './../signup/signup.component';
import { CoursesService } from './../courses.service';
import { AppRoutingModule } from './../app-routing.module';
import { CourseComponent } from './course/course.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';


fdescribe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent
        ,CourseComponent
        ,SignupComponent,
        SummaryPipe ],
      imports : [ReactiveFormsModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule],
      providers : [CoursesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('We should have add course button with Text Add Courses', () => {
      console.log("Test cases",)
      const element = fixture.debugElement.query(By.css('#addCoursesButton'))
      expect(element.nativeElement.innerText).toBe("Add Courses")
      let httpClient = TestBed.get(HttpClient)
      spyOn(httpClient,'get').and.returnValue(of());
    });
});
