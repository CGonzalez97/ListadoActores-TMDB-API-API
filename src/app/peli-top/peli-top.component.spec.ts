import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliTopComponent } from './peli-top.component';

describe('PeliTopComponent', () => {
  let component: PeliTopComponent;
  let fixture: ComponentFixture<PeliTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
