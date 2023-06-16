import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ServersComponent } from "../servers/servers.component";
import { UserComponent } from "../users/user/user.component";
import { UsersComponent } from "../users/users.component";


export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'users', component: UsersComponent
    },
    {
        path:'servers', component: ServersComponent
    },
    {
        path:'users/:id/:name', component:UserComponent
    }
] 