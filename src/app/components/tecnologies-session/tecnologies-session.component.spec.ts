import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesSessionComponent } from './tecnologies-session.component';

describe('TecnologiesSessionComponent', () => {
  let component: TecnologiesSessionComponent;
  let fixture: ComponentFixture<TecnologiesSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiesSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
