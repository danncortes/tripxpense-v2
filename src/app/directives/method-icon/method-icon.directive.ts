import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appMethodIcon]'
})
export class MethodIconDirective implements OnInit {

    @Input() codMethod;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.codMethod = Number(this.codMethod);
        switch (this.codMethod) {
            case 1:
                this.element.nativeElement.className = this.element.nativeElement.className + ' debit-card material-icons';
                this.element.nativeElement.innerHTML = 'credit_card';
                this.element.nativeElement.title = 'Debit Card';
                break;
            case 2:
                this.element.nativeElement.className = this.element.nativeElement.className + ' credit-card material-icons';
                this.element.nativeElement.innerHTML = 'credit_card'
                this.element.nativeElement.title = 'Credit Card';
                break;
            case 3:
                this.element.nativeElement.className = this.element.nativeElement.className + ' cash';
                this.element.nativeElement.innerHTML = '<img src="./assets/icons/cash-icon.svg" alt="">'
                this.element.nativeElement.title = 'Cash';
                break;
        }
    }
}
