import { Directive, Input, Component, ElementRef, Renderer, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Context } from '@2sic.com/dnn-sxc-angular';

import "@2sic.com/2sxc-typings";


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'sxc-toolbar'
})
export class SxcToolbarDirective implements OnInit {
    @Input() entityId: number;
    @Input() toolbar: any;
    @Input() settings: any;
    // toolbar: SafeHtml;
    constructor(
        private renderer: Renderer,
        private elementRef: ElementRef,
        private context: Context) { }

    ngOnInit() {
        this.context.all$.subscribe(all => {
            const sxc = all.sxc as SxcInstance;
            if (!sxc.manage) return;
            this.setHtml(sxc.manage.getToolbar(this.toolbar, { hover: 'left' }));
        });

    }



    setHtml(html){
        this.elementRef.nativeElement.innerHTML = html;
    }
}