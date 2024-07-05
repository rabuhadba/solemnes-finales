import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFidelizaciongtComponent } from './app-fidelizaciongt.component';

describe('AppFidelizaciongtComponent', () => {
  let component: AppFidelizaciongtComponent;
  let fixture: ComponentFixture<AppFidelizaciongtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFidelizaciongtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFidelizaciongtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
