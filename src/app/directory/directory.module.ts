import { CommonModule } from '@angular/common';
import { ContentManagerModule } from '@2sic.com/dnn-sxc-angular';
import { DirectoryComponent } from './directory.component';
import { DirectoryData } from './directory-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'angular2-select';

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
