import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[keyNav]'
})
export class OnReturnDirective {
    private el: ElementRef;
    @Input() onReturn: string;
    constructor(private _el: ElementRef) {
        this.el = this._el;
    }
    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if ((e.which === 13 || e.keyCode === 13)) {
            let control = e.target.nextElementSibling;
            e.preventDefault();
            while (true) {
                if (control) {
                    if ((!control.hidden) && control.hasAttribute('keyNav') &&
                        (control.nodeName === 'INPUT' ||
                            control.nodeName === 'SELECT' ||
                            control.nodeName === 'TEXTAREA')) {
                        control.focus();
                        if (control.nodeName !== 'SELECT') {
                            control.select();
                        }
                        return;
                    } else {
                        control = control.nextElementSibling;
                    }
                } else {
 //                   console.log('gata ba');
                    return;
                }
            }
        }
    }
}
