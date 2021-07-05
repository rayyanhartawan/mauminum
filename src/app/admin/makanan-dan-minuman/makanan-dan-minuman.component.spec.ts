import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakananDanMinumanComponent } from './makanan-dan-minuman.component';

describe('MakananDanMinumanComponent', () => {
  let component: MakananDanMinumanComponent;
  let fixture: ComponentFixture<MakananDanMinumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakananDanMinumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananDanMinumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
