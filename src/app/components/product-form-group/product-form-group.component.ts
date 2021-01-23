import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, every } from 'rxjs/operators';

@Component({
  selector: 'app-product-form-group',
  templateUrl: './product-form-group.component.html',
  styleUrls: ['./product-form-group.component.scss']
})
export class ProductFormGroupComponent implements OnInit {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.builForm();
   }

  ngOnInit() {

    
  }

  private builForm() {
    /*
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });*/

    this.form =  this._formBuilder.group({
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
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get emailField() {
    return this.form.get('email');
  }

}
