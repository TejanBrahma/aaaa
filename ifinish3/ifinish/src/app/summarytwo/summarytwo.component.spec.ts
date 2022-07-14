import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarytwoComponent } from './summarytwo.component';

describe('SummarytwoComponent', () => {
  let component: SummarytwoComponent;
  let fixture: ComponentFixture<SummarytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarytwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
