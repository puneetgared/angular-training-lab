import { ValidationErrors, AbstractControl } from '@angular/forms';

export class SignupValidator {

    static cannotContainSpace(control : AbstractControl)
    {

        // console.log('Cant contain space',control.value)
        if(!control.value) return;

        if ((<string>control.value).indexOf(" ") !== -1){
            return {cannotContainSpace : true}
        }
        return null;
    }
    //SignupValidator.cannotContainSpace
}