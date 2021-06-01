import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequerimientoComponent } from './add-requerimiento.component';

describe('AddRequerimientoComponent', () => {
  let component: AddRequerimientoComponent;
  let fixture: ComponentFixture<AddRequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
