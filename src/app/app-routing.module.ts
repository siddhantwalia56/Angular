import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./old-components/home/home.component";
import { PageNotFoundComponent } from "./old-components/page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { CanDecativateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./old-components/error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.serivce";
import { HomeComponentObs } from "./home/home.component";
import { UserComponentObs } from "./user/user.component";

const routes: Routes=[
  {path: '', component: HomeComponentObs},
  {path: 'user/:id', component: UserComponentObs}
//   {path: '' ,component:HomeComponent},
//   {path: 'users',component:UsersComponent, children:[
//     {path: ':id/:name',component:UserComponent},
//   ]},
//    {path: 'servers',
//    //canActivate:[AuthGuard],
//    canActivateChild:[AuthGuard], component:ServersComponent, children:[
//     {path: ':id', component:ServerComponent, resolve: {server:ServerResolver}},
//     {path: ':id/edit', component:EditServerComponent, canDeactivate:[CanDecativateGuard]},
//   ]
// },
//   {path: 'notfound', component:ErrorPageComponent, data:{message:'Page not found'}},
//   {path: '**', redirectTo: '/notfound'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingmodule{

}
