import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {
    // approach one to take data from outside user component
    this.user = {
      id: this.activatedRoute.snapshot.params.id,
      name: this.activatedRoute.snapshot.params.name
    }
    // approach two to take live data even if I am inside user component by subscribing with obeservable method
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.user = {
          id: param.id,
          name: param.name
        }
      }
    )
  }

  }