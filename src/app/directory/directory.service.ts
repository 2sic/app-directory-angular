import { DirectoryItem } from '../entities/directory-item';
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Data } from '@2sic.com/dnn-sxc-angular';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Industry } from "../entities/industry";
import { Config } from "app/entities/config";
import { i18n } from "app/entities/i18n";
import { ActivatedRoute } from "@angular/router";
import { GroupedItems } from "app/entities/grouped-items";

@Injectable()
export class DataService {
  entries$: Observable<DirectoryItem[]>;
  industries$: Observable<Industry[]>;
  config$: Observable<Config>;
  i18n$: Observable<i18n>;
  
  constructor(
    private data: Data,
    // private filter: ItemFilter,
    @Inject('alphabet') private alphabet: string[]    
  ) {
    this.industries$ = data.content$<Industry>('Industry')
      .startWith(new Array<Industry>());

    this.entries$ =  data.content$<DirectoryItem>('DirectoryItem')
      .startWith(new Array<DirectoryItem>());

      // config & i18n
      const config$ = data.query$<Config>("Config");
      this.config$ = config$.startWith(new Config());
      this.i18n$ = this.config$.map(c => c.Resources[0]);
  }

  groupsFilteredByRoute$(route: ActivatedRoute): Observable<GroupedItems[]> {
    return Observable.combineLatest(
      this.entries$,
      route.params
    ).map(([entries, params]) => {
      const department = params['department'] === 'all' ? undefined : params['department'];
      const firstChar = params['letter'] === 'all' ? undefined : params['letter'];
      const needle = params['needle'] ? params['needle'].toLocaleLowerCase() : undefined;
      
      return this.alphabet

        // only the selected letter
        .filter(a => firstChar === undefined || a === firstChar)
        .reduce((t, c) => {
          const isNum = c === '1-10';
          t.push({
            label: c.toUpperCase(),
            entries: entries.filter((e: DirectoryItem) => {
              if (needle

                // not found in title
                && e.Title.toLocaleLowerCase().search(needle) === -1

                // has no town or not found in town
                && (!e.Town || e.Town.toLocaleLowerCase().search(needle) === -1)

                // has no departments or not found in department
                && (e.Industry.length === 0 || e.Industry[0].Title.toLocaleLowerCase().search(needle) === -1)) return false;

              // filter by department
              if (department && (e.Industry.length === 0 || e.Industry[0].Title !== department)) return false;

              // only the current letter
              return isNum ? ~~e.Title[0] : (e.Title[0].toLocaleLowerCase() === c);
            }),
          });
          return t;
        }, new Array<GroupedItems>())

        // hide unused letters
        .filter(g => g.entries.length > 0);
    });
  }
}