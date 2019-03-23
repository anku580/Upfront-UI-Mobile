import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleBranchComponent } from './multiple-branch.component';

describe('MultipleBranchComponent', () => {
  let component: MultipleBranchComponent;
  let fixture: ComponentFixture<MultipleBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
