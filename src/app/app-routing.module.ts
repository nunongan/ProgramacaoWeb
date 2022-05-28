import { HomeComponent } from './component/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'companies', component: CompanyListComponent},
  {path: 'register', component:RegisterComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
