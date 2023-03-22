import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentiladorComponent } from './ventilador.component';

describe('VentiladorComponent', () => {
  let component: VentiladorComponent;
  let fixture: ComponentFixture<VentiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentiladorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
