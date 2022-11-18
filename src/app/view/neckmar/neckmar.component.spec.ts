import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckmarComponent } from './neckmar.component';

describe('NeckmarComponent', () => {
  let component: NeckmarComponent;
  let fixture: ComponentFixture<NeckmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
