import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvideoComponent } from './allvideo.component';

describe('AllvideoComponent', () => {
  let component: AllvideoComponent;
  let fixture: ComponentFixture<AllvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
