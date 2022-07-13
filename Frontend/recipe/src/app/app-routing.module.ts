import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeShareFormComponent } from './recipe-share-form/recipe-share-form.component';
import { AuthGuards } from './service/user.service';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'home', component:HomepageComponent, canActivate:[AuthGuards]},
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuards]},
  {path:'recipe-share', component:RecipeShareFormComponent, canActivate:[AuthGuards]},
  {path:'recipe-detail', component:RecipeDetailComponent, canActivate:[AuthGuards]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'recipes', component:AllRecipesComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
