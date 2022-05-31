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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
