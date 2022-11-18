import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarallComponent } from './earall.component';

describe('EarallComponent', () => {
  let component: EarallComponent;
  let fixture: ComponentFixture<EarallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
