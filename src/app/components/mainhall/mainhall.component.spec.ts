import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhallComponent } from './mainhall.component';

describe('MainhallComponent', () => {
  let component: MainhallComponent;
  let fixture: ComponentFixture<MainhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
