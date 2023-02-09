import { style } from '@angular/animations';
import { Directive,OnInit,ElementRef,Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@HostBinding('style.backgroundColor') backgroundColor:string='transparent';
constructor(private elref:ElementRef, private renderer:Renderer2) { }
ngOnInit(){
//   this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'lightgreen')
}

@HostListener('mouseenter') mouseover(enterData:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'lightgreen')
  this.backgroundColor='lightgreen';
}

@HostListener('mouseleave') mouseleave(enterData:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'white')
  this.backgroundColor='transparent';
}
}
