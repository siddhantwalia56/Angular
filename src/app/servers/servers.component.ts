import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allownewserver=false;
ServerStatus='Server is not connected'
constructor(){
  setTimeout(() => {
      this.allownewserver=true
      }, 3000);
}
ngOnInit() {
}
CreateServer(){
  return this.ServerStatus='Server is Connected';
}
}

