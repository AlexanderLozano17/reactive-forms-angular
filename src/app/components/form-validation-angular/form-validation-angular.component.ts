import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MyValidations } from '../../utils/my-validation';

@Component({
  selector: 'app-form-validation-angular',
  templateUrl: './form-validation-angular.component.html',
  styleUrls: ['./form-validation-angular.component.scss']
})
export class FormValidationAngularComponent implements OnInit {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _userServices: UserService) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this._formBuilder.group({
      age: [0, MyValidations.isYounger],
      price: [0, [Validators.min(500), Validators.max(3000)]],
      name: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      email: ['',Validators.email, MyValidations.validateEmail(this._userServices)],
      text: ['', [
        Validators.pattern(/^[a-zA-Z ]+$/),
        Validators.minLength(5),
        Validators.maxLength(80)
      ]],
      date: [],
      category: [],
      gender: [],
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
