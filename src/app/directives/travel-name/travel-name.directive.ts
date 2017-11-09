import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTravelName]'
})
export class TravelNameDirective implements OnInit {

  @Input() travels;
  @Input() codTravel;

  constructor( private element: ElementRef) {}

  ngOnInit() {

    const codTravel = this.codTravel

    const travel = this.travels.filter(function(item) {
      return item.id === Number(codTravel)
    })

    this.element.nativeElement.innerHTML = travel[0].name;

   }

}
