import { AbstractControl } from "@angular/forms";

export class ValidationService {




  static validateWebsite(control) {
    // RFC 2822 compliant regex
    if (
      control.value &&
      control.value.match(
        '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
      )
    ) {
      return null;
    } else {
      return { invalidWebsite: true };
    }
  }

  static validateEmail(control) {
    // RFC 2822 compliant regex
    if (
      control.value &&
      control.value.match(
        /^[A-Z0-9a-z_.~+-{|}!#$%&()/:;<=>?@`\'",]{1,}@[A-Z0-9a-z-]{2,}[.]{1}[A-Za-z.]{2,6}$/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (
      control.value && control.value.match(
        "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!^&*-+(){}:;~`/?<>.,_| ]).{6,20})"
      )
    ) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
  static namevalidator(control) {
    // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
    if (control.value && control.value.match(/^[^-\s][a-zA-Z_\s-]{0,50}$/)) {
      return null;
    } else {
      return { invalidName: true };
    }
  }
  static addressvalidator(control) {
    // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
    if (
      control.value &&
      control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?()":!;*_\s-]{3,100}$/)
    ) {
      return null;
    } else {
      return { invalidAddress: true };
    }
  }

  static descriptionvalidator(control) {
    // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
    if (
      control.value &&
      control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?":()!;*_\s-]{4,1000}$/)
    ) {
      return null;
    } else {
      return { invalidDescription: true };
    }
  }
  static phonevalidator(control) {
    // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
    // if (control.value && control.value.match(/^[^-\s][0-9_\s-]+$/)) {
    if (control.value && control.value.match(/^[0-9]{7,12}$/)) {
      return null;
    } else {
      return { Invalidphone: true };
    }
  }

  static date(control: AbstractControl) {
    console.log(control);
    if (control && (control.value !== null || control.value !== undefined)) {
      let frm = control.get("frm").value || "";
      let to = control.get("to").value || "";
      // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
      console.log(frm && !to);
  
      if (frm && !to) {
        control.get('to').enable();
        return null;
      } else if (frm && to) {
        new Date(frm) > new Date(to)
        return { invalid: true };
      }
      else
        return { invalid: true };
    }
    return null;
  }


  static numberValidator(control) {
    // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
    if (control.value && String(control.value).match(/^[0-9]*$/)) {
      return null;
    } else if (!control.value) {
      return null;
    }
    else
      return { invalid: true };
  }

  static codeValidator(control) {
    // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
    if (control.value && control.value.match(/^[a-zA-Z0-9]*$/)) {
      return null;
    } else if (control.value) {
      return null;
    }
    else
      return { invalid: true };
  }


  static dateValidator(control) {
    // for yyyy-mm-dd formate
    // if (control.value && control.value.match(/[0-9]{0,4}-[0-9]{0,2}-[0-9]{0,2}/)) {
    if (
      control.value &&
      control.value.match(
        /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/gm
      )
    ) {
      return null;
    } else {
      return { InvalidDate: true };
    }
  }
  static passNewValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;
      const passControl = control.root.get("old_pass");
      if (passControl) {
        const passValue = passControl.value;
        if (passValue === cnfpassValue || passValue === "") {
          return {
            isError: true
          };
        }
      }
    }
  }
}

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const cnfpassValue = control.value;
    const passControl = control.root.get('newPassword'); // magic is this
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== cnfpassValue || passValue === '') {
        return {
          isError: true
        };
      }
    }
  }

  return null;
}

export class PassValid {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get("newPassword").value || ""; // to get value in input tag
    let confirmPassword = AC.get("confirmPassword").value || ""; // to get value in input tagc
    // if (confirmPassword.length < 0)
    //   return AC.get("confirmPassword").setErrors({ required: true });
    if (password.length >= 1 && confirmPassword.length <= 20) {
      if (password && confirmPassword && password === confirmPassword) {
        return AC.get("confirmPassword").setErrors(null);
      } else {
        return AC.get("confirmPassword").setErrors({ MatchPassword: true });
      }
    }
    return null;
  }

}
export function date(control: AbstractControl) {
  console.log(control);
  if (control && (control.value !== null || control.value !== undefined)) {
    let frm = control.get("frm").value || "";
    let to = control.get("to").value || "";
    // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
    console.log(frm && !to);

    if (frm && !to) {
      control.get('to').enable();
      return null;
    } else if (frm && to) {
      new Date(frm) > new Date(to)
      return { invalid: true };
    }
    else
      return { invalid: true };
  }
  return false;
}

export class DateValidators {
  static valid(control : AbstractControl){
    if (control && (control.value !== null || control.value !== undefined)) {
      let frm = control.get("frm").value || "";
      let to = control.get("to").value || "";
      // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
      console.log(frm && !to);
  
      if (frm && !to) {
        control.get('to').enable();
        return null;
      } else if (frm && to) {
        new Date(frm) > new Date(to)
        return { invalid: true };
      }
      else
        return { invalid: true };
    }
    return null;
  }
  // static dateLessThan(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }){
  //     return (c: AbstractControl): { [key: string]: boolean } | null => {
  //         const date1 = c.get(dateField1).value;
  //         const date2 = c.get(dateField2).value;
  //         if ((date1 !== null && date2 !== null) && date1 > date2) {
  //             return validatorField;
  //         }
  //         return null;
  //     };
  // }
}

