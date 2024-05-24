import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBasicComponentComponent } from './dropdown-basic-component.component';

describe('DropdownBasicComponentComponent', () => {
  let component: DropdownBasicComponentComponent;
  let fixture: ComponentFixture<DropdownBasicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBasicComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
