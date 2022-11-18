import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarmarComponent } from './earmar.component';

describe('EarmarComponent', () => {
  let component: EarmarComponent;
  let fixture: ComponentFixture<EarmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
