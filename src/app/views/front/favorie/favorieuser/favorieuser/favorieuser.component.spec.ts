import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorieuserComponent } from './favorieuser.component';

describe('FavorieuserComponent', () => {
  let component: FavorieuserComponent;
  let fixture: ComponentFixture<FavorieuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorieuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorieuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
