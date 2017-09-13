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
export class DirectoryData {
  entries$: Observable<DirectoryItem[]>;
  industries$: Observable<Industry[]>;
  config$: Observable<Config>;
  i18n$: Observable<i18n>;
  
  constructor(
    private data: Data,
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
      this.entries$.map(all => all.map(this.prepareForSearch)),
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
              if (needle && e.SearchText.search(needle) === -1) return false;

              // filter by department
              if (department)
                if(e.Industry.length === 0 || !e.Industry.find(i => i.Title === department)) return false;

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

  
  private prepareForSearch(item: DirectoryItem): DirectoryItem {
    const SearchText = (item.Title + " " 
    + item.Town + " " 
    // + item.Industry.reduce<String>( (last: string, next: Industry) => last + " " + next.Title, "")).toLocaleLowerCase();
    + item.Industry.map<String>(i => i.Title).join(" ")
    ).toLocaleLowerCase();
    // console.log(search);

    return Object.assign({}, item, { SearchText });
  }


}