import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaLayoutComponent } from './cozinha-layout.component';

describe('CozinhaLayoutComponent', () => {
  let component: CozinhaLayoutComponent;
  let fixture: ComponentFixture<CozinhaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CozinhaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
