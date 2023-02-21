import { Component,
   Input,
    ViewEncapsulation,
    OnChanges, OnInit,
    SimpleChanges,
     DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnChanges,
OnInit,DoCheck,
AfterContentInit,AfterContentChecked,
AfterViewChecked,AfterViewInit
{
@Input() element: {type:string,name:string, content:string }
@Input() name: string
constructor(){
  console.log("constructor called");
}
ngOnChanges(Changes:SimpleChanges){
console.log('changes implemented');
console.log(Changes);
}
ngDoCheck(){
  console.log('docheck called')
}
ngOnInit(){
  console.log("ngOnInit called");
}
ngAfterContentInit(){
  console.log("AfterContentInit");
}
ngAfterContentChecked() {
 console.log("AfterContentInit");
}
ngAfterViewChecked(): void {
  console.log("Afterviewchecked");
}
ngAfterViewInit(): void {
  console.log("AfterviewInit");
}

}
