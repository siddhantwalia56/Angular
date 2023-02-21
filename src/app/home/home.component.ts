import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentObs implements OnInit, OnDestroy{

  private firstObsSubscription;
  constructor() { }

  ngOnInit() {
   this.firstObsSubscription= interval(1000).subscribe(count=>{
      console.log(count)
    })
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe()
  }
}
