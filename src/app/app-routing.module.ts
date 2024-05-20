import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JoinComponent } from './join/join.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
{path:'join', component: JoinComponent},
{path: 'our team', component: TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
