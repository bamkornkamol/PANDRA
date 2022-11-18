import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayhalloweenComponent } from './dayhalloween.component';

describe('DayhalloweenComponent', () => {
  let component: DayhalloweenComponent;
  let fixture: ComponentFixture<DayhalloweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayhalloweenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayhalloweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
