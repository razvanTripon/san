import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    //    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');

  }
  @HostListener('mouseenter') enter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') leave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
