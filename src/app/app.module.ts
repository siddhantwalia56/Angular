import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component'
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './account.service';
import { loggingservice } from './logging.service';

@NgModule({
  declarations: [
    AccountComponent,
    NewAccountComponent,
    AppComponent,
    BasicHighlightDirective,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountsService,loggingservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
