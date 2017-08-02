import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightVarianta2Directive } from './directives/highlight-varianta2.directive';
import { OnReturnDirective} from './directives/focusnextinput.directive';
import { TestComponent } from './test.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightVarianta2Directive,
    OnReturnDirective,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
