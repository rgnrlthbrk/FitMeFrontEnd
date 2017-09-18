import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
             selector: '[myHover]',
             host: {
               '(mouseenter)': 'onMouseEnter()',
               '(mouseleave)': 'onMouseLeave()'
             }
           })
export class HoverDirective {

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input('myHighlight') highlightColor: string;

  onMouseEnter() {
    this.highlight('1px solid', '-1px');
  }

  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(border:string, margin:string) {
    this.el.style.border = border;
    this.el.style.margin  = margin;
  }

}
