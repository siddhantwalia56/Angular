import { ExternalReference } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output,ViewChild } from '@angular/core';

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
  @ViewChild ('servercontent',{static:true} ) servercontent: ElementRef;

  onAddServer(name:HTMLInputElement) {
  this.servercreated.emit({
    serverName:name.value,
    serverContent:this.servercontent.nativeElement.value
  })
  }

   onAddBlueprint(name:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:name.value,
      serverContent:this.servercontent.nativeElement.value
  })
}
}
