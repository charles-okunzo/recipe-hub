import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeShareFormComponent } from './recipe-share-form/recipe-share-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ProfileComponent } from './profile/profile.component';
import {
  AuthGuard,
  AuthInterceptor,
  UserService,
} from './service/user.service';
import { RecipeApiService } from './service/recipe-api.service';
import { SummaryPipe } from './pipes/summary.pipe';

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
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule,
  ],
  providers: [
    UserService,
    RecipeApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
