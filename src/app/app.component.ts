
import { Component, ElementRef } from '@angular/core';
import { Context, DnnAppComponent } from '/projects/dnn-sxc-angular/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent {
  constructor(
    element: ElementRef,
    context: Context,
  ) {
    super(element, context);
  }
}