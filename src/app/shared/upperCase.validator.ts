import { AbstractControl } from '@angular/forms';

export function UpperCaseValidator(
    control: AbstractControl
    ): { 
        [key: string]: boolean } | null {
            let hasUpper = /[A-Z]/.test(control.value);
            if (!hasUpper) {
                return { upperCase: true };
                }
            return null;
        }
