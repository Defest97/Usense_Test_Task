import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pas-strength',
  templateUrl: './pas-strength.component.html',
  styleUrls: ['./pas-strength.component.css']
})
export class PasStrengthComponent {
  divColors: any;
  passwordForm=this.formBuilder.group({
    passwordControl:['']
  });
  constructor(private formBuilder: FormBuilder,private passwordStrength: PasswordStrengthService ) {
    this.divColors=passwordStrength.divColors;
  }
}