import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckdisComponent } from './neckdis.component';

describe('NeckdisComponent', () => {
  let component: NeckdisComponent;
  let fixture: ComponentFixture<NeckdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
