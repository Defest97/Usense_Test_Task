import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-pas-strength',
  templateUrl: './pas-strength.component.html',
  styleUrls: ['./pas-strength.component.css']
})
export class PasStrengthComponent {
  password: string = '';
  divColors: any;

  constructor(private passwordStrength:PasswordStrengthService)
  {
    this.onInput();
  }
  onInput() {
    this.divColors=this.passwordStrength.passwordCheck(this.password)
  }
  

 }