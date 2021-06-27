import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[hot-keys]' })
export class HotKeysDirective {
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() enterEvent: EventEmitter<void> = new EventEmitter<void>();
  @HostListener('document:keyup', ['$event'])
  onKeyup(event: any) {
    if (event.keyCode === 27) {
      this.closeEvent.emit();
    }
    if (event.keyCode === 13) {
      this.enterEvent.emit();
    }
  }
}
