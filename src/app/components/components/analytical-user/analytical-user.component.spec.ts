import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalUserComponent } from './analytical-user.component';

describe('AnalyticalUserComponent', () => {
  let component: AnalyticalUserComponent;
  let fixture: ComponentFixture<AnalyticalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
