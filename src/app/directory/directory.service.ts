import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { DirectoryEntry } from "app/directory/directory-entry";
import { Department } from "app/directory/department";

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryEntry[]>;
  departments : Observable<Department[]>;
  base: string = 'http://agv-sw2017.60.2sic.net';
  path: string = '/DesktopModules/2sxc/API/app/auto/content';

  private headers: Headers = new Headers();

  private entrySubject: Subject<DirectoryEntry[]> = new Subject<DirectoryEntry[]>();
  private departmentSubject: Subject<Department[]> = new Subject<Department[]>();

  constructor(
    private http: Http
  ) {
    this.departments = this.departmentSubject.asObservable();
    this.entries = this.entrySubject.asObservable();
    this.headers.append('ModuleId', '408');
    this.headers.append('TabId', '73');
    this.getDirectoryItems();
    this.getDeparmentEntries();
  }
  
  private getDirectoryItems(): void {
    this.http.get(`${this.base + this.path}/DirectoryItem`, { headers: this.headers })
      .map(res => res.json().map((entry: DirectoryEntry) => {
        entry.Logo = this.base + entry.Logo;
        return entry;
      }))
      .subscribe(entries => this.entrySubject.next(entries));
  }

  private getDeparmentEntries(): void {
    this.http.get(`${this.base + this.path}/Department`, { headers: this.headers })
    .subscribe(res => this.departmentSubject.next(res.json()));
  }
}