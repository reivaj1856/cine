import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoComponent } from './descuento.component';

describe('DescuentoComponent', () => {
  let component: DescuentoComponent;
  let fixture: ComponentFixture<DescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
