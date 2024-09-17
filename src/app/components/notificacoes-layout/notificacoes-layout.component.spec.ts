import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesLayoutComponent } from './notificacoes-layout.component';

describe('NotificacoesLayoutComponent', () => {
  let component: NotificacoesLayoutComponent;
  let fixture: ComponentFixture<NotificacoesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacoesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacoesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
