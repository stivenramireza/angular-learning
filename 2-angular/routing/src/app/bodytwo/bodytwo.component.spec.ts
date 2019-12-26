import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytwoComponent } from './bodytwo.component';

describe('BodytwoComponent', () => {
  let component: BodytwoComponent;
  let fixture: ComponentFixture<BodytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
