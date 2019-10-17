// Cores
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumborowComponent } from './jumborow/jumborow.component';

// Features
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { CenternavComponent } from './centernav/centernav.component';
import { UserlinksComponent } from './userlinks/userlinks.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumborowComponent,
    LeftnavComponent,
    CenternavComponent,
    UserlinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faEnvelope);
  }
}
