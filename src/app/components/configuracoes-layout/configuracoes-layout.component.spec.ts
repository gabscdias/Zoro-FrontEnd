import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesLayoutComponent } from './configuracoes-layout.component';

describe('ConfiguracoesLayoutComponent', () => {
  let component: ConfiguracoesLayoutComponent;
  let fixture: ComponentFixture<ConfiguracoesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracoesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
