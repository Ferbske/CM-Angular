import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReadComponent } from './check-read.component';

describe('CheckReadComponent', () => {
  let component: CheckReadComponent;
  let fixture: ComponentFixture<CheckReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
