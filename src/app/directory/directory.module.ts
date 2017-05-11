import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory.component';
import { DirectoryService } from "app/directory/directory.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DirectoryComponent
  ],
  declarations: [
    DirectoryComponent
  ],
  providers: [
    DirectoryService
  ]
})
export class DirectoryModule { }
