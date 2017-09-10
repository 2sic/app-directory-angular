import { SxcAngular } from '../../../node_modules/@2sic.com/dnn-sxc-angular/src/sxc-angular.service';
import { Department } from './department';
import { DirectoryEntry } from './directory-entry';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

<<<<<<< HEAD
import { DirectoryEntry } from 'app/directory/directory-entry';
import { Department } from 'app/directory/department';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ContentResourceFactory } from '@2sic.com/dnn-sxc-angular';
=======
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SxcData } from '@2sic.com/dnn-sxc-angular';
>>>>>>> 4dda007d69375f780943edbc6afb2dc4396d0fad

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryEntry[]>;
  departments: Observable<Department[]>;
  
  private entrySubject: BehaviorSubject<DirectoryEntry[]> = new BehaviorSubject<DirectoryEntry[]>([]);
  private departmentSubject: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);

  constructor(
    private sxcData: SxcData
  ) {
    this.departments = this.departmentSubject.asObservable();
    this.entries = this.entrySubject.asObservable();
    this.getDirectoryItems();
    this.getDeparmentEntries();
  }

  private getDirectoryItems(): void {
    this.sxcData.content<DirectoryEntry>('DirectoryItem').get()
      .subscribe(entries => this.entrySubject.next(entries));
  }

  private getDeparmentEntries(): void {
    this.sxcData.content<Department>('Department').get()
      .subscribe(entries => this.departmentSubject.next(entries));
  }
}