import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(parseInt(this.activatedRoute.snapshot.params.id));
    /* ---------------- using resolver ---------------------------------------- */
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        console.log(data);
        
        this.server = data.server
      }
    )
    /*--------------- fetch data from route ---------------------------------- */
    // this.server = this.serversService.getServer(+(this.activatedRoute.snapshot.params.id));
    // this.activatedRoute.params.subscribe( (params: Params) => {
    //   this.server = this.serversService.getServer(+params.id);
    // });
  }


  invokeEdit(){
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }
}
