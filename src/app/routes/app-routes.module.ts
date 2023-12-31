import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { UsersComponent } from '../users/users.component';
import { ServerComponent } from '../servers/server/server.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AuthGuard } from '../auth-guard.service';
import { ErrorFoundComponent } from '../error-found/error-found.component';
import { ServerResolver } from '../servers/server/server-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {
            server: ServerResolver
        }
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
  },
//   {
//     path: 'not-found',
//     component: NotfoundComponent,
//   },
  {
    path: 'not-found',
    component: ErrorFoundComponent,
    data:{
        message: 'Page not found!'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
