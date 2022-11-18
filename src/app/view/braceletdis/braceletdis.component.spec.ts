import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletdisComponent } from './braceletdis.component';

describe('BraceletdisComponent', () => {
  let component: BraceletdisComponent;
  let fixture: ComponentFixture<BraceletdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraceletdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraceletdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
