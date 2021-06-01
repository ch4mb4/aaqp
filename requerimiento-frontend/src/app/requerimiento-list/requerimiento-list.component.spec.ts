import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientoListComponent } from './requerimiento-list.component';

describe('RequerimientoListComponent', () => {
  let component: RequerimientoListComponent;
  let fixture: ComponentFixture<RequerimientoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequerimientoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
