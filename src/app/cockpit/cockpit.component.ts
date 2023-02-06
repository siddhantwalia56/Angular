import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() servercreated=new EventEmitter<{serverName:string,serverContent: string}>;
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent: string}>
  // newServerName = '';
  // newServerContent = '';
  onAddServer(name,content) {
  this.servercreated.emit({
    serverName:name.value,
    serverContent:content.value
  })
  }

   onAddBlueprint(name,content) {
    this.blueprintCreated.emit({
      serverName:name.value,
      serverContent:content.value
  })
}
}
