import { Component } from '@angular/core';

@Component({
  selector: 'app-pas-strength',
  templateUrl: './pas-strength.component.html',
  styleUrls: ['./pas-strength.component.css']
})
export class PasStrengthComponent {
  pass: string = '';
  pasStrengthEasy: 'gray'|'red'|'green'|'yellow'='gray';
  pasStrengthMedium: 'gray'|'red'|'green'|'yellow'='gray';
  pasStrengthStrong: 'gray'|'red'|'green'='gray';

  onInput() {
    const hasLetters = /[a-zA-Z]/.test(this.pass);
    const hasDigits = /\d/.test(this.pass)
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`₴№]/.test(this.pass)
    if (this.pass === '') {
      this.allGray();
    }
    if (this.pass.length > 0 && this.pass.length < 8) {
      this.allRed()
    }
    else {
      this.allGray();
      if (hasLetters || hasDigits || hasSymbols) {
        this.pasStrengthEasy = 'red';
        this.pasStrengthMedium = 'gray';
        this.pasStrengthStrong = 'gray';
      }
      if (hasLetters && hasSymbols || hasLetters && hasDigits || hasSymbols && hasDigits) {
        this.pasStrengthEasy = 'yellow';
        this.pasStrengthMedium = 'yellow';
        this.pasStrengthStrong = 'gray';
      }
      if (hasLetters && hasDigits && hasSymbols) {
        this.allGreen();
      }
    }
  }
  allGray() {
    this.pasStrengthEasy = 'gray';
    this.pasStrengthMedium = 'gray';
    this.pasStrengthStrong = 'gray';
  }
  allGreen() {
    this.pasStrengthEasy = 'green';
    this.pasStrengthMedium = 'green';
    this.pasStrengthStrong = 'green';
  }
  allRed() {
    this.pasStrengthEasy = 'red';
    this.pasStrengthMedium = 'red';
    this.pasStrengthStrong = 'red';
  }

 }