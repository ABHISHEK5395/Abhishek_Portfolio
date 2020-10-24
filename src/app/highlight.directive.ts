import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective 
{
  
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.el.nativeElement.style.color = '#40E0D0';
  }
  
  @HostListener('mouseleave') onMouseLeave()
  {
    this.el.nativeElement.style.color = null;
  }

}
