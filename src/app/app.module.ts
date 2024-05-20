import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ShortBriefComponent } from './short-brief/short-brief.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { KeepInTouchComponent } from './keep-in-touch/keep-in-touch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { JoinComponent } from './join/join.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoaderComponent,
    HomePageComponent,
    ClientsSectionComponent,
    ServicesSectionComponent,
    ShortBriefComponent,
    HeroSectionComponent,
    KeepInTouchComponent,
    FooterComponent,
    JoinComponent,
    TeamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
