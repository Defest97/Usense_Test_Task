import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  password: string = '';
  divColors: any;

  constructor(private passwordStrength: PasswordStrengthService) { }

  onInput(event: Event) {
    const targetElement = event.target as HTMLInputElement;
    this.divColors = this.passwordStrength.passwordCheck(targetElement.value)
    this.onChange(targetElement.value)
  }
  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  writeValue(value: any): void {
    this.password = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

}
