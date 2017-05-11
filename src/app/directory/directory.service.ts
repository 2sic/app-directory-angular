import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { DirectoryEntry } from "app/directory/directory-entry";

@Injectable()
export class DirectoryService {
  entries: Observable<DirectoryEntry[]>;
  base: string = 'http://agv-sw2017.60.2sic.net';

  private headers: Headers = new Headers();

  private entrySubject: Subject<DirectoryEntry[]> = new Subject<DirectoryEntry[]>();

  constructor(
    private http: Http
  ) {
    this.entries = this.entrySubject.asObservable();
    this.headers.append('ModuleId', '408');
    this.headers.append('TabId', '73');
    this.getItems();
  }
  
  private getItems(): void {
    this.http.get(`${this.base}/DesktopModules/2sxc/API/app/auto/content/DirectoryItem`, { headers: this.headers })
      .map(res => res.json().map((entry: DirectoryEntry) => {
        entry.Logo = this.base + entry.Logo;
        return entry;
      }))
      .subscribe(res => this.entrySubject.next(res));
  }
}