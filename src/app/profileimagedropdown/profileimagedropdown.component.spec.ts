import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileimagedropdownComponent } from './profileimagedropdown.component';

describe('ProfileimagedropdownComponent', () => {
  let component: ProfileimagedropdownComponent;
  let fixture: ComponentFixture<ProfileimagedropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileimagedropdownComponent]
    });
    fixture = TestBed.createComponent(ProfileimagedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
