import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MessagesService, ThreadsService, UsersService, AuthGuardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
