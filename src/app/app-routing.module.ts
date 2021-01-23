import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationAngularComponent } from './components/form-validation-angular/form-validation-angular.component';
import { ProductFormGroupWithStyleComponent } from './components/product-form-group-with-style/product-form-group-with-style.component';
import { ProductFormGroupComponent } from './components/product-form-group/product-form-group.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


const routes: Routes = [
  { path: 'form-reactivos-e-inputs', component: FormValidationAngularComponent},
  { path: 'reactivos-agrupacion-inputs', component: ProductFormComponent },
  { path: 'form-reactivos-y-CSS-bulma', component: ProductFormGroupWithStyleComponent },
  { path: 'validaciones-angular', component: ProductFormGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
