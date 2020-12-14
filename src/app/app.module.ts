import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {appRoutingModule} from './app-routing';
import { SuccessComponent } from './components/success/success.component';
import { AppInputComponent } from './components/modules/app-input/app-input.component';
import { AppButtonComponent } from './components/modules/app-button/app-button.component';
import { AppInputLabelComponent } from './components/modules/app-input-label/app-input-label.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppInputCheckboxComponent } from './components/modules/app-input-checkbox/app-input-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessComponent,
    AppInputComponent,
    AppButtonComponent,
    AppInputLabelComponent,
    AppInputCheckboxComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
