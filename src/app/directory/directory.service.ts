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
    private sxcData: Data
  ) {
    this.industries = this.sxcData.content<Industry>('Industry').get()
      .startWith(new Array<Industry>());
    this.entries =  this.sxcData.content<DirectoryItem>('DirectoryItem').get()
      .startWith(new Array<DirectoryItem>());
    const config$ = this.sxcData.query<Config>("Config").get();
    this.config = config$.startWith(new Config());
    this.i18n = this.config.map(c => c.Resources[0]);
  }
}