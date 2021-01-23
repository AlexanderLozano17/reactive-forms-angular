import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormGroupComponent } from './components/product-form-group/product-form-group.component';
import { ProductFormGroupWithStyleComponent } from './components/product-form-group-with-style/product-form-group-with-style.component';
import { FormValidationAngularComponent } from './components/form-validation-angular/form-validation-angular.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductFormGroupComponent,
    ProductFormGroupWithStyleComponent,
    FormValidationAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
