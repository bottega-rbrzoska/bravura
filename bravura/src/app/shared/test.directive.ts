import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brTest]'
})
export class TestDirective {

  @Input() brTest: string;
  @Input() brTestNumber: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.el.nativeElement, 'color', 'pink');
    renderer.addClass(this.el.nativeElement, 'test');
  }

  @HostListener('click')
  handleClick() {
    console.log(this.brTest);
  }

}
