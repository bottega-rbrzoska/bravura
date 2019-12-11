import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[brTestStruct]'
})
export class TestStructDirective implements OnChanges {

  @Input()
  set brTestStructDupa(val: any) {
    this.vcr.clear();
    if (val) {
      for (let i = 1; i <= val; i++ ) {
        this.vcr.createEmbeddedView(this.template, {
          $implicit: i,
          doubled: i * 2
        });
      }
    }
  }

  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) {

  }

  ngOnChanges(changes) {
    console.log(changes);
  }

}
