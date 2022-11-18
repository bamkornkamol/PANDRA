import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckallComponent } from './neckall.component';

describe('NeckallComponent', () => {
  let component: NeckallComponent;
  let fixture: ComponentFixture<NeckallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
