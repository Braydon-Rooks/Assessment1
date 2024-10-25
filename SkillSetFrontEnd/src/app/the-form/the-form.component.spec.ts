import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFormComponent } from './the-form.component';

describe('TheFormComponent', () => {
  let component: TheFormComponent;
  let fixture: ComponentFixture<TheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
