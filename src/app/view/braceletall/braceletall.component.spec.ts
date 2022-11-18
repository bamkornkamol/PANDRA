import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletallComponent } from './braceletall.component';

describe('BraceletallComponent', () => {
  let component: BraceletallComponent;
  let fixture: ComponentFixture<BraceletallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraceletallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraceletallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
