import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaychristmasComponent } from './daychristmas.component';

describe('DaychristmasComponent', () => {
  let component: DaychristmasComponent;
  let fixture: ComponentFixture<DaychristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaychristmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaychristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
