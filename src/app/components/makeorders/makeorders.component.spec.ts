import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeordersComponent } from './makeorders.component';

describe('MakeordersComponent', () => {
  let component: MakeordersComponent;
  let fixture: ComponentFixture<MakeordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
