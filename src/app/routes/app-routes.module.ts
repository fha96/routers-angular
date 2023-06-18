import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { EditServerComponent } from "../servers/edit-server/edit-server.component";
import { ServersComponent } from "../servers/servers.component";
import { UserComponent } from "../users/user/user.component";
import { UsersComponent } from "../users/users.component";
import { ServerComponent } from "../servers/server/server.component";
import { NotfoundComponent } from "../notfound/notfound.component";


export const routes: Routes = [
    {
        path:'', redirectTo:'/mewo', pathMatch: 'full'
    },
    {
        path: 'mewo',component:HomeComponent,canActivate:[]
    }
    ,
    {
        path:'users', component: UsersComponent, children: [
            {
                path:':id/:name', component:UserComponent
            },
        ]
    },
    {
        path:'servers', component: ServersComponent, children:[

            {
                path:':id', component: ServerComponent
            },
            {
                path:':id/edit', component:EditServerComponent
            },
        ]
    },
    {
        path:'not-found', component:NotfoundComponent
    },

    {
        path:'**', redirectTo:'/not-found', 
    }
   
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {

}