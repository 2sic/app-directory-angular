import { Department } from './department';
import { DirectoryEntry } from './directory-entry';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data } from '/projects/dnn-sxc-angular/src';

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryEntry[]>;
  departments: Observable<Department[]>;
  
  private entrySubject: BehaviorSubject<DirectoryEntry[]> = new BehaviorSubject<DirectoryEntry[]>([]);
  private departmentSubject: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);

  constructor(
    private sxcData: Data
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