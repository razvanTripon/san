import { Directive, HostListener } from '@angular/core';
@Directive({
    selector: '[keyNav]'
})
export class OnReturnDirective {
    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if ((e.which === 13 || e.keyCode === 13)) {
            let control = e.target.nextElementSibling;
            e.preventDefault();
            while (true) {
                if (control) {
                    if ((!control.hidden) &&
                        control.hasAttribute('keyNav') &&
                        (control.nodeName === 'INPUT' ||
                            control.nodeName === 'SELECT' ||
                            control.nodeName === 'TEXTAREA')
                    ) {
                        control.focus();
                        if (control.nodeName !== 'SELECT') {
                            control.select();
                        }
                        return;
                    } else {
                        control = control.nextElementSibling;
                    }
                } else {
                    //          console.log('gata ba nu a mai gasit elemente pe care sa calce');
                    return;
                }
            }
        }
    }
}
