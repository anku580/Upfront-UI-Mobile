import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdishesComponent } from './listofdishes.component';

describe('ListofdishesComponent', () => {
  let component: ListofdishesComponent;
  let fixture: ComponentFixture<ListofdishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofdishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
