import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() servercreated=new EventEmitter<{serverName:string,serverContent: string}>;
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent: string}>
  newServerName = '';
  newServerContent = '';
  onAddServer() {
  this.servercreated.emit({
    serverName:this.newServerName,
    serverContent:this.newServerContent
  })
  }

   onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
  })
}
}
