import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CardsComponent } from './components/cards/cards.component';
import { LearnComponent } from './components/learn/learn.component';
import { ReactComponent } from './components/react/react.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profilepage/profile/profile.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './profilepage/signup/signup.component';
import { LoginpageComponent } from './profilepage/loginpage/loginpage.component';
import { NavProfileComponent } from './profilepage/nav-profile/nav-profile.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    NewsletterComponent,
    CardsComponent,
    LearnComponent,
    ReactComponent,
    QuestionsComponent,
    InstructorsComponent,
    ContactsComponent,
    FooterComponent,
    ProfileComponent,
    MainComponent,
    SignupComponent,
    LoginpageComponent,
    NavProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
