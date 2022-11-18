import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingallComponent } from './ringall.component';

describe('RingallComponent', () => {
  let component: RingallComponent;
  let fixture: ComponentFixture<RingallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
