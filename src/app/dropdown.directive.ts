import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[bk-dropdown]'
})
export class DropdownDirective {
    private isOpen = false;

    @HostBinding('class.open') get opened(){
        return this.isOpen;
    }
    @HostListener('click') open () {
        this.isOpen = true;
    }
    @HostListener('mouseleave') close () {
        this.isOpen = false;
    }

}
