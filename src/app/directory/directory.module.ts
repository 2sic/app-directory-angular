import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'angular2-select';
 
import { DirectoryComponent } from './directory.component';
import { DataService } from 'app/directory/directory.service';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { FilteredItems } from "app/directory/filtered-items";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule
  ],
  exports: [
    DirectoryComponent
  ],
  declarations: [
    DirectoryComponent,
  ],
  providers: [
    DataService,
    FilteredItems,
    Data,
    {
      provide: 'alphabet',
      useValue: [
        '1-10',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]
    }
  ]
})
export class DirectoryModule { }
