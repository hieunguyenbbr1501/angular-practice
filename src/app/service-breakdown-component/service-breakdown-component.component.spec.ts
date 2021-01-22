import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBreakdownComponentComponent } from './service-breakdown-component.component';

describe('ServiceBreakdownComponentComponent', () => {
  let component: ServiceBreakdownComponentComponent;
  let fixture: ComponentFixture<ServiceBreakdownComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBreakdownComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBreakdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
