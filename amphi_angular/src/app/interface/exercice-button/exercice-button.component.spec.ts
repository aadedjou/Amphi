import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceButtonComponent } from './exercice-button.component';

describe('ExerciceButtonComponent', () => {
  let component: ExerciceButtonComponent;
  let fixture: ComponentFixture<ExerciceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
