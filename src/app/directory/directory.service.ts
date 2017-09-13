import { DirectoryItem } from '../entities/directory-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Industry } from "../entities/industry";
import { Config } from "app/entities/config";
import { i18n } from "app/entities/i18n";

@Injectable()
export class DataService {
  entries: Observable<DirectoryItem[]>;
  industries: Observable<Industry[]>;
  config: Observable<Config>;
  i18n: Observable<i18n>;
  
  constructor(
    private data: Data
  ) {
    this.industries = data.content$<Industry>('Industry')
      .startWith(new Array<Industry>());
    this.entries =  data.content$<DirectoryItem>('DirectoryItem')
      .startWith(new Array<DirectoryItem>());
    const config$ = data.query$<Config>("Config");
    this.config = config$.startWith(new Config());
    this.i18n = this.config.map(c => c.Resources[0]);
  }
}