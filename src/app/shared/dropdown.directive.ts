import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';
@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') status = false;
    @HostListener('click') onclick(evntData: Event) {
        this.status = !this.status;
    }
    @HostListener('mouseleave') onleave(evntData: Event) {
        this.status = false;
    }
}
