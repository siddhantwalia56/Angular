import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './old-components/cockpit/cockpit.component';
import { ServerElementComponent } from './old-components/server-element/server-element.component'
import { BasicHighlightDirective } from './old-components/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './old-components/better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NewAccountComponent } from './old-components/new-account/new-account.component';
import { AccountComponent } from './old-components/account/account.component';
import { AccountsService } from './account.service';
import { loggingservice } from './logging.service';
import { HomeComponent } from './old-components/home/home.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './old-components/page-not-found/page-not-found.component';
import { AppRoutingmodule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDecativateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './old-components/error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.serivce';
import { UserComponentObs } from './user/user.component';
import { HomeComponentObs } from './home/home.component';

export const routes: Routes = []

@NgModule({
  declarations: [
    UsersComponent,
    UserComponentObs,
    HomeComponentObs,
    EditServerComponent,
    UserComponent,
    HomeComponent,
    AccountComponent,
    NewAccountComponent,
    AppComponent,
    BasicHighlightDirective,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BetterHighlightDirective,
    UnlessDirective,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingmodule
  ],
  providers: [AccountsService,loggingservice,ServersService,AuthService,AuthGuard,CanDecativateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
