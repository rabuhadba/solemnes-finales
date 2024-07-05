import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFidelizacionComponent } from './app-fidelizacion.component';

describe('AppFidelizacionComponent', () => {
  let component: AppFidelizacionComponent;
  let fixture: ComponentFixture<AppFidelizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFidelizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFidelizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});