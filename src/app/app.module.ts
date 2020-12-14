import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnsureacesSelectorComponent } from './components/ensureaces-selector/ensureaces-selector.component';
import { NumberFormatPipe } from './utils/number-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoFormComponent,
    VehicleFormComponent,
    EnsureacesSelectorComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdkStepperModule,
    NgStepperModule,
    BrowserAnimationsModule
  ],
  providers: [NumberFormatPipe],
  bootstrap: [AppComponent],
  exports: [NumberFormatPipe]
})
export class AppModule { }
