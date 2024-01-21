import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSessionComponent } from './projects-session.component';

describe('ProjectsSessionComponent', () => {
  let component: ProjectsSessionComponent;
  let fixture: ComponentFixture<ProjectsSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
