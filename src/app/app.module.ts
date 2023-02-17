import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
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
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
  {path: '' ,component:HomeComponent},
  {path: 'users',component:UsersComponent, children:[
    {path: ':id/:name',component:UserComponent},
  ]},
  {path: 'servers', component:ServersComponent, children:[
    {path: ':id', component:ServerComponent},
    {path: ':id/edit', component:EditServerComponent},
  ]},

]

export const routes: Routes = []

@NgModule({
  declarations: [
    UsersComponent,
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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountsService,loggingservice,ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
