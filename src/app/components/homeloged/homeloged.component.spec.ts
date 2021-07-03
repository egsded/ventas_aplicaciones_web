import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelogedComponent } from './homeloged.component';

describe('HomelogedComponent', () => {
  let component: HomelogedComponent;
  let fixture: ComponentFixture<HomelogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelogedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
