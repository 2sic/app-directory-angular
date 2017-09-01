
import { Component, ElementRef } from '@angular/core';
import { SxcAngular, SxcAppComponent } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SxcAppComponent {
  constructor(
    element: ElementRef,
    sxcNg: SxcAngular,
  ) {
    super(element, sxcNg);
  }
}