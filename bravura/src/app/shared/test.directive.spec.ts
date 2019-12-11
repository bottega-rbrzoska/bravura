import { TestDirective } from './test.directive';
import { Component, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

@Component({
  selector: 'testcomp',
  template: `<div brTest="color"></div>`
})
class TestDirectiveComponent {}

describe('TestDirective', () => {
  const __MOCKS__ = {
    elementRef: { nativeElement: {}},
    renderer: { setStyle: () => {}, addClass: () => {}} as unknown as Renderer2
  };

  describe('isolated tests', () => {

    it('should create an instance', () => {
      const directive = new TestDirective(__MOCKS__.elementRef, __MOCKS__.renderer);
      expect(directive).toBeTruthy();
    });

    it('should call addClass and setStyle renderer methods', () => {
      spyOn(__MOCKS__.renderer, 'addClass');
      spyOn(__MOCKS__.renderer, 'setStyle');
      const directive = new TestDirective(__MOCKS__.elementRef, __MOCKS__.renderer);
      expect(__MOCKS__.renderer.addClass).toHaveBeenCalledWith({}, 'test');
      expect(__MOCKS__.renderer.setStyle).toHaveBeenCalledWith({}, 'color', 'pink');
    });
  });

  describe('shallow tests', () => {
    let spectator: SpectatorDirective<TestDirective>;
    const createDirective = createDirectiveFactory(TestDirective);
    beforeEach(() => {
      spectator = createDirective(`<div brTest="color">Testing Test Directive</div>`);
    });
    it('should create', () => {
      spyOn(console, 'log').and.callThrough();
      spectator.click(spectator.element);
      spectator.detectChanges();

      expect(console.log).toHaveBeenCalledWith('color');
    });
  });
});
