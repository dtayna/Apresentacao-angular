import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationCardComponent } from './components/presentation-card/presentation-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AboutmeSessionComponent } from './components/aboutme-session/aboutme-session.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TecnologiesSessionComponent } from './components/tecnologies-session/tecnologies-session.component';
import { ProjectsSessionComponent } from './components/projects-session/projects-session.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    PresentationCardComponent,
    AboutmeSessionComponent,
    ProgressBarComponent,
    TecnologiesSessionComponent,
    ProjectsSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
