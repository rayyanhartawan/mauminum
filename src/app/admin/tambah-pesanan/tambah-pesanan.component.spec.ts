import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPesananComponent } from './tambah-pesanan.component';

describe('TambahPesananComponent', () => {
  let component: TambahPesananComponent;
  let fixture: ComponentFixture<TambahPesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahPesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
