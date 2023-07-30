import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasStrengthComponent } from './pas-strength/pas-strength.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@NgModule({
  declarations: [
    AppComponent,
    PasStrengthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
