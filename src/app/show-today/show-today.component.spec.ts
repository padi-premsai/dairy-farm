import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTodayComponent } from './show-today.component';

describe('ShowTodayComponent', () => {
  let component: ShowTodayComponent;
  let fixture: ComponentFixture<ShowTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
