import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPesananComponent } from './detail-pesanan.component';

describe('DetailPesananComponent', () => {
  let component: DetailPesananComponent;
  let fixture: ComponentFixture<DetailPesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
