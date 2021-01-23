import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form-group-with-style',
  templateUrl: './product-form-group-with-style.component.html',
  styleUrls: ['./product-form-group-with-style.component.scss']
})
export class ProductFormGroupWithStyleComponent implements OnInit {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.builForm();
  }

  ngOnInit() {
  }

  private builForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      text: ['', [
        Validators.required,
        Validators.maxLength(80)
      ]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value)
    }
  }

  get emailField() {
    return this.form.get('email');
  }

  get emailFieldIsValid() {
    return this.form.get('email').touched && this.emailField.valid;
  }

  get emailFieldIsInvalid() {
    return this.form.get('email').touched && this.emailField.invalid;
  } 

  get textField() {
    return this.form.get('text');
  }

  get textFieldIsValid() {
    return this.form.get('text').touched && this.textField.valid;
  }

  get textFieldIsInvalid() {
    return this.form.get('text').touched && this.textField.invalid;
  } 

  doSomething() {
    console.log('click');
  }  

}
