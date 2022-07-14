import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtabletwoComponent } from './eventtabletwo.component';

describe('EventtabletwoComponent', () => {
  let component: EventtabletwoComponent;
  let fixture: ComponentFixture<EventtabletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventtabletwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtabletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
