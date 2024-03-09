import { Directive, ElementRef } from '@angular/core';
import 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';


@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.fun()
  }

  fun(): void {
    hljs.registerLanguage('javascript', javascript);
    console.log(this.el.nativeElement);
    hljs.highlight(
      this.el.nativeElement.innerHTML,
      { language: 'javascript' }
    )
  }
}