import { Component } from '@angular/core'
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
})
export class ServerComponent{
  serverid=10;
  serverstatus='';
  constructor(){
    this.serverstatus=Math.random() >0.5 ? 'online': 'offline';
  }
getcolor(){
  if(this.serverstatus=='online')
  {
  return 'green';
  }
  else
  return 'red';
}
}
