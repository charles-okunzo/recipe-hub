import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeShareFormComponent } from './recipe-share-form/recipe-share-form.component';
import { AuthGuard } from './service/user.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'recipe-share',
    component: RecipeShareFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipe-detail',
    component: RecipeDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
