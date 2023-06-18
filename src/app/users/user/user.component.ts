import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscribtion: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // approach one to take data from outside user component
    this.user = {
      id: this.activatedRoute.snapshot.params.id,
      name: this.activatedRoute.snapshot.params.name,
    };
    // approach two to take live data even if I am inside user component by subscribing with obeservable method
    this.paramsSubscribtion = this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.user = {
          id: param.id,
          name: param.name,
        };
      }
    );
  }

  /* its not nesseserly to implement below execution, because angular will unsubscribe of 
  this observable once the component destroyed, but if you gonna subscribe with your own observable,
  you must implement below */
   
  ngOnDestroy(): void {
    this.paramsSubscribtion.unsubscribe();
  }
}
