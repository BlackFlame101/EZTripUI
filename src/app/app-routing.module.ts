import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/DashBoardCom/login-page/login-page.component';
import { SideNavBarComponent } from './components/DashBoardCom/side-nav-bar/side-nav-bar.component';

const routes: Routes = [
  {path: 'side-nav-bar' , component : SideNavBarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
