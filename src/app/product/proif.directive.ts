import { Directive, Input, OnChanges, SimpleChange, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: 'ng-template [proIf]'
})
export class ProIfDirective implements OnChanges {
    @Input() proIf: boolean;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<Object>) {
        }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        const change = changes['proIf'];
        if (!change.isFirstChange() && change.currentValue === false) {
            this.container.clear();
        } else if (change.currentValue === true) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
