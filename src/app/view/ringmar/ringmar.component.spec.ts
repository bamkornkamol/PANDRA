import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingmarComponent } from './ringmar.component';

describe('RingmarComponent', () => {
  let component: RingmarComponent;
  let fixture: ComponentFixture<RingmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
