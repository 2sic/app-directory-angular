import { ActivatedRoute, Params, Router } from '@angular/router';
import { AZLetter } from '../entities/az-letter';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { debounce } from 'rxjs/operator/debounce';
import { DirectoryData } from './directory-data.service';
import { DirectoryItem } from '../entities/directory-item';
import { FormControl } from '@angular/forms';
import { GroupedItems } from '../entities/grouped-items';
import { I18n } from '../entities/i18n';
import { Industry } from '../entities/industry';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  groups$: Observable<GroupedItems[]>;
  department: string;
  letter: string;
  // needle: string;
  industries$: Observable<Industry[]>;
  i18n$: Observable<I18n>;
  term = new FormControl(/* this.needle */);
  azList: Observable<AZLetter[]>;

  constructor(
    private data: DirectoryData,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('alphabet') private alphabet: string[]
  ) {
    this.industries$ = data.industries$;
    this.i18n$ = data.i18n$;
    this.groups$ = data.groupsFilteredByRoute$(this.route).share();

    this.azList = this.groups$
      .filter(grp => grp.length > 0) // skip empty sets
      .take(1) // stop after the first delivery, to not change letters as the filters change
      .map(grp => this.alphabet.map(letr => Object.assign(new AZLetter(), {
        Letter: letr,
        Active: grp.find(g => g.label.toLocaleLowerCase() === letr)
      } )));

    // stream of text input in search
    this.term.valueChanges
      .debounceTime(400)
      .subscribe(newTerm => this.router.navigate(['/search', newTerm]));

    // keep fields updated from url
    this.route.params.subscribe(params => {
      this.department = params['department'] || 'all';
      this.letter = params['letter'] || 'all';
      const tempNeedle = params['needle'];
      this.term.patchValue(tempNeedle || '', { emitViewToModelChange: false, emitEvent: false });
    });

  }

  changeDepartment() {
    // this.needle = undefined;
    if (!this.department) this.department = 'all';
    if (!this.letter) this.letter = 'all';
    this.router.navigate(['/list', this.department, this.letter]);
  }

}
