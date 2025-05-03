import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static Match(control1Name: string, control2Name: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1 = formGroup.get(control1Name);
      const control2 = formGroup.get(control2Name);

      if (!control1 || !control2) {
        console.error(`Match validator: Controls '${control1Name}' or '${control2Name}' not found in the form group.`);
        return null;
      }

      if (control1.value !== control2.value) {
        // Values don't match: Set 'Match' error while preserving existing errors
        control2.setErrors({
          ...control2.errors,
          Match: { actualValue: control2.value, expectedValue: control1.value }
        });
      } else {
        // Values match: Remove 'Match' error if present
        if (control2.errors?.['Match']) {
          const { Match, ...remainingErrors } = control2.errors;
          control2.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
        }
      }

      return null;
    };
  }
}