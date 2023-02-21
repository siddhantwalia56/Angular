import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval,Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentObs implements OnInit, OnDestroy{

  private firstObsSubscription;
  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription= interval(1000).subscribe(count=>{
  //     console.log(count)
  //   })
    const customIntervalObservable = Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
          observer.next(count);
          count++;
        },1000)
    })
    this.firstObsSubscription=customIntervalObservable.subscribe(data =>{
      console.log(data)
    })
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe()
  }
}
