import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsernameComponent } from './input-username.component';

describe('InputUsernameComponent', () => {
  let component: InputUsernameComponent;
  let fixture: ComponentFixture<InputUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
