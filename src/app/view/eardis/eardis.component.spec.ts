import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EardisComponent } from './eardis.component';

describe('EardisComponent', () => {
  let component: EardisComponent;
  let fixture: ComponentFixture<EardisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EardisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EardisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
