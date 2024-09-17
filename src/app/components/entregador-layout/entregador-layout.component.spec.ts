import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorLayoutComponent } from './entregador-layout.component';

describe('EntregadorLayoutComponent', () => {
  let component: EntregadorLayoutComponent;
  let fixture: ComponentFixture<EntregadorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregadorLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregadorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
