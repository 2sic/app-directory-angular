import { DirectoryItem } from '../entities/directory-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Industry } from "../entities/industry";

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryItem[]>;
  departments: Observable<Industry[]>;
  
  private entrySubject: BehaviorSubject<DirectoryItem[]> = new BehaviorSubject<DirectoryItem[]>([]);
  private departmentSubject: BehaviorSubject<Industry[]> = new BehaviorSubject<Industry[]>([]);

  constructor(
    private sxcData: Data
  ) {
    this.departments = this.departmentSubject.asObservable();
    this.entries = this.entrySubject.asObservable();
    this.preloadEverything();
  }

  private preloadEverything(): void {
    this.sxcData.content<DirectoryItem>('DirectoryItem').get()
      .subscribe(entries => this.entrySubject.next(entries));

      this.sxcData.content<Industry>('Industry').get()
      .subscribe(entries => this.departmentSubject.next(entries));
  }
}