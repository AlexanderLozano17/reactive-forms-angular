import { AbstractControl } from "@angular/forms";
import { map } from "rxjs/operators";
import { UserService } from "../services/user.service";

export class MyValidations {

    static isYounger(control: AbstractControl) {
        const value = control.value;
        if (value < 18) {
            return { isYounger: true };
        }
        return null;
    }

    static isYoungerWithParam(limit: number) {
       return (control: AbstractControl) => {
        const value = control.value;
        if (value < limit) {
            return { isYounger: true };
        }
        return null;
       }
    }

    static validateEmail(userService: UserService) {
        return (control: AbstractControl) => {
          const value = control.value;
          return userService.checkEmail(value)
          .pipe(
            map(response => {
              const isEmailAvailable = response.isEmailAvailable;
              return isEmailAvailable ? null : {notAvailable: true};
            })
          );
        };
    }
}