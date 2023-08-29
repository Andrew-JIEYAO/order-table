import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDialogComponent } from './health-dialog.component';

describe('HealthDialogComponent', () => {
  let component: HealthDialogComponent;
  let fixture: ComponentFixture<HealthDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HealthDialogComponent]
    });
    fixture = TestBed.createComponent(HealthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
