import { style } from '@angular/animations';
import { Directive,OnInit,ElementRef,Renderer2,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultcolor:string='yellow'
  @Input() highlightedcolor: string='lightgreen'
@HostBinding('style.backgroundColor') backgroundColor:string;

constructor(private elref:ElementRef, private renderer:Renderer2) { }
ngOnInit(){
//   this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'lightgreen')
this.backgroundColor=this.defaultcolor
}
@HostListener('mouseenter') mouseover(enterData:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'lightgreen')
  this.backgroundColor=this.highlightedcolor;
}

@HostListener('mouseleave') mouseleave(enterData:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'backgroundColor', 'white')
  this.backgroundColor=this.defaultcolor;
}
}
