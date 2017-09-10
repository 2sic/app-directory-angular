import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'angular2-select';
 
import { DirectoryComponent } from './directory.component';
import { DirectoryService } from 'app/directory/directory.service';
import { GroupPipe } from './group.pipe';
<<<<<<< HEAD
import { ContentResourceFactory } from '@2sic.com/dnn-sxc-angular';
=======
import { SxcDataProvider } from '@2sic.com/dnn-sxc-angular';
>>>>>>> 4dda007d69375f780943edbc6afb2dc4396d0fad

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SelectModule
  ],
  exports: [
    DirectoryComponent
  ],
  declarations: [
    DirectoryComponent,
    GroupPipe
  ],
  providers: [
    DirectoryService,
    SxcDataProvider,
    GroupPipe,
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
