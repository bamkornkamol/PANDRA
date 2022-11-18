import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayallComponent } from './dayall.component';

describe('DayallComponent', () => {
  let component: DayallComponent;
  let fixture: ComponentFixture<DayallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
