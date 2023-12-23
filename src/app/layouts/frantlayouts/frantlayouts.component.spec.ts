import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrantlayoutsComponent } from './frantlayouts.component';

describe('FrantlayoutsComponent', () => {
  let component: FrantlayoutsComponent;
  let fixture: ComponentFixture<FrantlayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrantlayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrantlayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
