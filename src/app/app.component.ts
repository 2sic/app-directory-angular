import { Component, ElementRef } from '@angular/core';
import { DnnAppComponent } from "@2sic.com/sxc-angular/sxc-app.component";
import { DnnAngular } from "@2sic.com/sxc-angular/sxc-angular.service";

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