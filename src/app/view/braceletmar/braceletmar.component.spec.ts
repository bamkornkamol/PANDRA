import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletmarComponent } from './braceletmar.component';

describe('BraceletmarComponent', () => {
  let component: BraceletmarComponent;
  let fixture: ComponentFixture<BraceletmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraceletmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraceletmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
