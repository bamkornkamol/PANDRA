import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingdisComponent } from './ringdis.component';

describe('RingdisComponent', () => {
  let component: RingdisComponent;
  let fixture: ComponentFixture<RingdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
