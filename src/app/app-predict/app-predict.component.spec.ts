import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPredictComponent } from './app-predict.component';

describe('AppPredictComponent', () => {
  let component: AppPredictComponent;
  let fixture: ComponentFixture<AppPredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPredictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
