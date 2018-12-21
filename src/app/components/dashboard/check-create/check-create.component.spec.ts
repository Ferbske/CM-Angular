import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCreateComponent } from './check-create.component';

describe('CheckCreateComponent', () => {
  let component: CheckCreateComponent;
  let fixture: ComponentFixture<CheckCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
