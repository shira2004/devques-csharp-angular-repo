import { AfterViewInit, Directive, ElementRef } from '@angular/core';
// import * as hljs from 'highlight.js/lib/core';
// import 'highlight.js/styles/agate-dark.css';
import 'highlight.js/lib/languages/javascript';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }

  // ngAfterViewInit(): void {
  //   (hljs as any).highlightElement(this.el.nativeElement);
  // }
}