import { Component, ElementRef } from '@angular/core';
import { DnnAppComponent, DnnAngular } from "@2sic.com/dnn-sxc-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent {
  constructor(
    element: ElementRef,
    dnnNg: DnnAngular,
  ) {
    super(element, dnnNg);
  }
}