import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoLayoutComponent } from './historico-layout.component';

describe('HistoricoLayoutComponent', () => {
  let component: HistoricoLayoutComponent;
  let fixture: ComponentFixture<HistoricoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
