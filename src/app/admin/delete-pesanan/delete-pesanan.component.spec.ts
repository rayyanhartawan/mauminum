import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePesananComponent } from './delete-pesanan.component';

describe('DeletePesananComponent', () => {
  let component: DeletePesananComponent;
  let fixture: ComponentFixture<DeletePesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
