import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeShareFormComponent } from './recipe-share-form/recipe-share-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuards, AuthInterceptor } from './service/user.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SummaryPipe } from './pipes/summary.pipe';
import { AllRecipesComponent } from './all-recipes/all-recipes.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    LandingPageComponent,
    RecipeShareFormComponent,
    RecipeDetailComponent,
    ProfileComponent,
    AboutUsComponent,
    SummaryPipe,
    AllRecipesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    // RouterModule,  
    
  ],
  providers: [
    AuthGuards,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
