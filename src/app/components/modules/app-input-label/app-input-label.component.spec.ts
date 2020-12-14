import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputLabelComponent } from './app-input-label.component';

describe('AppInputLabelComponent', () => {
  let component: AppInputLabelComponent;
  let fixture: ComponentFixture<AppInputLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInputLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInputLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
