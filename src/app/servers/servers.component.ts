import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allownewserver=false;
ServerStatus='';
serverupdate=''
servercreated='false'
constructor(){
  setTimeout(() => {
      this.allownewserver=true
      }, 3000);
}
ngOnInit() {
}
CreateServer(){
  this.servercreated='true';
  return this.ServerStatus='Server is Connected by '+this.serverupdate;
}
Onupdateserver(event){
 this.serverupdate=(<HTMLInputElement>event.target).value
}
}

