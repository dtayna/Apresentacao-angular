import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeSessionComponent } from './aboutme-session.component';

describe('AboutmeSessionComponent', () => {
  let component: AboutmeSessionComponent;
  let fixture: ComponentFixture<AboutmeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
