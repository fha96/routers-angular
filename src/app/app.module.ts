import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutesModule } from './routes/app-routes.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ErrorFoundComponent } from './error-found/error-found.component';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotfoundComponent,
    ErrorFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [ServersService, AuthGuard, AuthService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
