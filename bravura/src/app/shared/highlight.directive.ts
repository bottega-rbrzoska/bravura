import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brHighlight]'
})
export class HighlightDirective {

  @Input() brHighlight: string;
  private isActive = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  toggle() {
    this.isActive = !this.isActive;
    this.isActive ? this.renderer.addClass(this.el.nativeElement, this.brHighlight) : this.renderer.removeClass(this.el.nativeElement, this.brHighlight)
  }
}
