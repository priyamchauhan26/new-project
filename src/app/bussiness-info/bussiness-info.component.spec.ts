import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessInfoComponent } from './bussiness-info.component';

describe('BussinessInfoComponent', () => {
  let component: BussinessInfoComponent;
  let fixture: ComponentFixture<BussinessInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessInfoComponent]
    });
    fixture = TestBed.createComponent(BussinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
