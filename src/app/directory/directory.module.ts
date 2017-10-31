import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'angular2-select';

import { DirectoryComponent } from './directory.component';
import { DirectoryData } from 'app/directory/directory-data.service';
import { Data, ContentManagerModule } from '@2sic.com/dnn-sxc-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    ContentManagerModule
  ],
  exports: [
    DirectoryComponent
  ],
  declarations: [
    DirectoryComponent
  ],
  providers: [
    DirectoryData,
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
