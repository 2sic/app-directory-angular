import { Component, ElementRef } from '@angular/core';
import { SxcAppComponent } from "@2sic.com/sxc-angular/sxc-app.component";
import { SxcAngularService } from "@2sic.com/sxc-angular/sxc-angular.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SxcAppComponent {
  constructor(
    element: ElementRef,
    sxcNg: SxcAngularService,
  ) {
    super(element, sxcNg);
  }
}