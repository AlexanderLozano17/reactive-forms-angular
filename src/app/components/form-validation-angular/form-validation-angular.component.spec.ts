import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationAngularComponent } from './form-validation-angular.component';

describe('FormValidationAngularComponent', () => {
  let component: FormValidationAngularComponent;
  let fixture: ComponentFixture<FormValidationAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
