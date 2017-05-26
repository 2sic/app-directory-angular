import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SelectModule } from 'angular2-select';
import { SxcHttpProvider } from "@2sic.com/sxc-angular/sxc-http.provider";

import { DirectoryComponent } from './directory.component';
import { DirectoryService } from "app/directory/directory.service";
import { GroupPipe } from './group.pipe';
import { ContentResourceFactory } from "@2sic.com/sxc-angular/sxc-content.service";

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
    ContentResourceFactory,
    GroupPipe,
    { provide: 'alphabet', useValue: ['1-10', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] }
  ]
})
export class DirectoryModule { }
