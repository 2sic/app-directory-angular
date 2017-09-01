import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DirectoryEntry } from 'app/directory/directory-entry';
import { Department } from "app/directory/department";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ContentResourceFactory } from "@2sic.com/dnn-sxc-angular";

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryEntry[]>;
  departments: Observable<Department[]>;

  private entrySubject: BehaviorSubject<DirectoryEntry[]> = new BehaviorSubject<DirectoryEntry[]>([]);
  private departmentSubject: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);

  constructor(
    private crf: ContentResourceFactory
  ) {
    this.departments = this.departmentSubject.asObservable();
    this.entries = this.entrySubject.asObservable();
    this.getDirectoryItems();
    this.getDeparmentEntries();
  }

  private getDirectoryItems(): void {
    this.crf.resource<DirectoryEntry[]>('DirectoryItem').get()
      .subscribe(entries => this.entrySubject.next(entries));
  }

  private getDeparmentEntries(): void {
    this.crf.resource<Department[]>('Department').get()
      .subscribe(entries => this.departmentSubject.next(entries));
  }
}