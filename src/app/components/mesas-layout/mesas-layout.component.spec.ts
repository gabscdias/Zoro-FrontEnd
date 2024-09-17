import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasLayoutComponent } from './mesas-layout.component';

describe('MesasLayoutComponent', () => {
  let component: MesasLayoutComponent;
  let fixture: ComponentFixture<MesasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
