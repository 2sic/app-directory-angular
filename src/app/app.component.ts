
import { Component, ElementRef } from '@angular/core';
import { Context, DnnAppComponent } from '@2sic.com/dnn-sxc-angular';

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