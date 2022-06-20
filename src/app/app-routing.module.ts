import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginpageComponent } from './profilepage/loginpage/loginpage.component';
import { ProfileComponent } from './profilepage/profile/profile.component';
import { SignupComponent } from './profilepage/signup/signup.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',  component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
