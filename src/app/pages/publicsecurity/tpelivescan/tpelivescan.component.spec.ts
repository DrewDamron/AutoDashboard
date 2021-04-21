import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpelivescanComponent } from './tpelivescan.component';

describe('TpelivescanComponent', () => {
  let component: TpelivescanComponent;
  let fixture: ComponentFixture<TpelivescanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpelivescanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpelivescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
