import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
// import { Pipe } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainhallComponent } from './components/mainhall/mainhall.component';
import { ChatComponent } from './components/chat/chat.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RoundPipe } from './components/round.pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainhallComponent,
    ChatComponent,
    GameListComponent,
    UserProfileComponent,
    RoundPipe,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
