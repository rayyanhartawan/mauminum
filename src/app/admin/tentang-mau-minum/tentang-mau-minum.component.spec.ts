import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangMauMinumComponent } from './tentang-mau-minum.component';

describe('TentangMauMinumComponent', () => {
  let component: TentangMauMinumComponent;
  let fixture: ComponentFixture<TentangMauMinumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TentangMauMinumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangMauMinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
