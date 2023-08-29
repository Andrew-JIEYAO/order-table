import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataviewComponent } from './test-dataview.component';

describe('TestDataviewComponent', () => {
  let component: TestDataviewComponent;
  let fixture: ComponentFixture<TestDataviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDataviewComponent]
    });
    fixture = TestBed.createComponent(TestDataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
