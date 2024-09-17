import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesLayoutComponent } from './ajustes-layout.component';

describe('AjustesLayoutComponent', () => {
  let component: AjustesLayoutComponent;
  let fixture: ComponentFixture<AjustesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjustesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
