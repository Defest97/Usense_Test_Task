import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  divColors: any = {
    pasStrengthEasy: 'gray',
    pasStrengthMedium: 'gray',
    pasStrengthStrong: 'gray'
  };
  passwordCheck(tmpPassword: string) {
    const hasLetters = /[a-zA-Z]/.test(tmpPassword);
    const hasDigits = /\d/.test(tmpPassword)
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`₴№]/.test(tmpPassword)
    if (tmpPassword === '') {
      this.changeAllColors('gray');
      return this.divColors;
    }
    if (tmpPassword.length > 0 && tmpPassword.length < 8) {
      this.changeAllColors('red');
      return this.divColors;
    }
    else {
      this.changeAllColors('gray');
      if (hasLetters || hasDigits || hasSymbols) {
        this.divColors.pasStrengthEasy = 'red';
        this.divColors.pasStrengthMedium = 'gray';
        this.divColors.pasStrengthStrong = 'gray';
      }
      if (hasLetters && hasSymbols || hasLetters && hasDigits || hasSymbols && hasDigits) {
        this.divColors.pasStrengthEasy = 'yellow';
        this.divColors.pasStrengthMedium = 'yellow';
        this.divColors.pasStrengthStrong = 'gray';
      }
      if (hasLetters && hasDigits && hasSymbols) {
        this.changeAllColors('green');
      }
      return this.divColors;
    }
  }
  
  changeAllColors(color: string) {
    for (let divColor in this.divColors) {
      this.divColors[divColor] = color;
    }
  }
}
