import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcarsComponent } from './searchcars.component';

describe('SearchcarsComponent', () => {
  let component: SearchcarsComponent;
  let fixture: ComponentFixture<SearchcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
