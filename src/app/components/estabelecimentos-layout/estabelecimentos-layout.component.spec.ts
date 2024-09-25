import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentosLayoutComponent } from './estabelecimentos-layout.component';

describe('EstabelecimentosLayoutComponent', () => {
  let component: EstabelecimentosLayoutComponent;
  let fixture: ComponentFixture<EstabelecimentosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentosLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
