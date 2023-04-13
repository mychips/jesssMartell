import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurJobComponent } from './our-job.component';

describe('OurJobComponent', () => {
  let component: OurJobComponent;
  let fixture: ComponentFixture<OurJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
