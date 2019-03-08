import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Injectable()
export class CoursesService {

    constructor(private httpClient : HttpClient){
    }

    getCourses(){
        return [
            {
                name : 'Angular Training',
                author : 'Puneet',
                price : 100000,
                location : 'Gurukul',
                description : "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work" 
             },
             {
                name : 'NodeJs Training',
                author : 'Mayank',
                price : 200000,
                location : 'Chausar 3rd Floor' ,
                description : "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work"
             },
        ]
    }

    getTodos() : Observable<any>{

        console.log('Test map only',[10,20,30].map(item => item*100))

        return this.httpClient
            .get("https://jsonplaceholder.typicode.com/todos")
            .pipe(
                map(res => {
                    console.log('Map of todos',res);
                    return res;
                }),
                filter(res => {
                    return true;
                })
            )
            
    }
}