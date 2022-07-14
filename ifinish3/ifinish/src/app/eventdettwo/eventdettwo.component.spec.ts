import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdettwoComponent } from './eventdettwo.component';

describe('EventdettwoComponent', () => {
  let component: EventdettwoComponent;
  let fixture: ComponentFixture<EventdettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdettwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
