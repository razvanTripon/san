import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightVarianta2]'
})
export class HighlightVarianta2Directive implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highLight = 'yellow';
  @HostBinding('style.backgroundColor') fundal: string;
  @HostListener('mouseenter') enter(eventData: Event) {
    this.fundal = this.highLight;
  }
  @HostListener('mouseleave') blur(eventData: Event) {
    this.fundal = this.defaultColor;
  }


  constructor() { }
  ngOnInit() {
    this.fundal = this.defaultColor;
  }

}
