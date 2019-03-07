import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: any, ...args: any[]){
        if(!value) return value;
        
        const length = (args[0]) ? args[0] : 40;
        return value.substr(0,length) + ' ......';
    }
}