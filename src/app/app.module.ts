import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from   '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { FirstListComponent } from './components/first-list/first-list.component';
import { MatIconModule } from "@angular/material/icon";

import { PickerModule } from '@ctrl/ngx-emoji-mart';


import { ChatHeaderComponent } from './components/chat-header/chat-header.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './components/side-nav/menu-list/menu-list.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';




import "@angular/compiler"
import { MessagePassingService } from './service/message-passing.service';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageComponent } from './components/message/message.component';
import { CardComponent } from './components/card/card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FirstListComponent,
    MenuListComponent,
    MessageComponent,
    NavbarComponent,
    ChatHeaderComponent,
    FirstListComponent,
    MenuListComponent,
    SideNavComponent,
    MessageContainerComponent,
    MessageBoxComponent,
    CardComponent,
    ProfileCardComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatCardModule

  ],
  providers: [
    MessagePassingService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
