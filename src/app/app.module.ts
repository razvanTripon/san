import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightVarianta2Directive } from './directives/highlight-varianta2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightVarianta2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
