import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputCheckboxComponent } from './app-input-checkbox.component';

describe('AppInputCheckboxComponent', () => {
  let component: AppInputCheckboxComponent;
  let fixture: ComponentFixture<AppInputCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInputCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
