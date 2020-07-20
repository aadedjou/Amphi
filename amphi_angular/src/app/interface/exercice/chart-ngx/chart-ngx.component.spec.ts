/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartNgxComponent } from './chart-ngx.component';

describe('ChartNgxComponent', () => {
  let component: ChartNgxComponent;
  let fixture: ComponentFixture<ChartNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
