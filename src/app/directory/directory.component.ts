import { Component, OnInit, Input, Output, EventEmitter, Inject, ElementRef } from '@angular/core';
import { DirectoryService } from "app/directory/directory.service";
import { DirectoryItem } from "../entities/directory-item";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { GroupPipe } from "app/directory/group.pipe";
import { Industry } from "../entities/industry";
import { debounce } from "rxjs/operator/debounce";
import { i18n } from "app/entities/i18n";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  groups: any[];
  department: string;
  letter: string;
  needle: string;
  departments: Industry[];
  i18n: Observable<i18n>;

  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private data: DirectoryService,
    private route: ActivatedRoute,
    private router: Router,
    private groupFilter: GroupPipe,
    element: ElementRef,
    @Inject('alphabet') public alphabet: string[]
  ) {
    this.i18n = data.i18n.share();

    this.searchSubject
      .debounceTime(400)
      .subscribe(needle => {
        this.router.navigate(['/search', needle]);
      });

    Observable.combineLatest(
      this.data.entries,
      route.params
    ).subscribe(([entries, params]) => {
      this.department = params['department'] || 'alle';
      this.letter = params['letter'] || 'alle';
      this.needle = params['needle'];
      this.groups = this.groupFilter.transform(entries, this.letter, this.department, this.needle);
    });

    data.industries
      .subscribe(departments => this.departments = departments);
  }

  changeDepartment() {
    this.needle = undefined;
    if (!this.department) this.department = 'alle';
    if (!this.letter) this.letter = 'alle';
    this.router.navigate(['/filter', this.department, this.letter]);
  }

  search() {
    this.searchSubject.next(this.needle);
  }
}
