import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSplitterComponent } from './test-splitter.component';

describe('TestSplitterComponent', () => {
  let component: TestSplitterComponent;
  let fixture: ComponentFixture<TestSplitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestSplitterComponent]
    });
    fixture = TestBed.createComponent(TestSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
