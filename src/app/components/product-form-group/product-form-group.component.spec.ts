import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormGroupComponent } from './product-form-group.component';

describe('ProductFormGroupComponent', () => {
  let component: ProductFormGroupComponent;
  let fixture: ComponentFixture<ProductFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
