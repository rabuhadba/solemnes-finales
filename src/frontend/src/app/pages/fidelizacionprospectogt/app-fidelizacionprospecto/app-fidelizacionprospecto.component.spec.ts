import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFidelizacionprospectoComponent } from './app-fidelizacionprospecto.component';

describe('AppFidelizacionprospectoComponent', () => {
  let component: AppFidelizacionprospectoComponent;
  let fixture: ComponentFixture<AppFidelizacionprospectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFidelizacionprospectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFidelizacionprospectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});