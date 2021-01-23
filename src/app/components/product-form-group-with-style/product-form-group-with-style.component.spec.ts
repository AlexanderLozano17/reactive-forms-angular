import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormGroupWithStyleComponent } from './product-form-group-with-style.component';

describe('ProductFormGroupWithStyleComponent', () => {
  let component: ProductFormGroupWithStyleComponent;
  let fixture: ComponentFixture<ProductFormGroupWithStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormGroupWithStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormGroupWithStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
