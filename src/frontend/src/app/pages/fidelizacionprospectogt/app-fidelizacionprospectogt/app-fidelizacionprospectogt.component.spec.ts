import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFidelizacionprospectogtComponent } from './app-fidelizacionprospectogt.component';

describe('AppFidelizacionprospectogtComponent', () => {
  let component: AppFidelizacionprospectogtComponent;
  let fixture: ComponentFixture<AppFidelizacionprospectogtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFidelizacionprospectogtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFidelizacionprospectogtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
