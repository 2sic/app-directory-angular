import { Component, OnInit, Input, Output, EventEmitter, Inject, ElementRef } from '@angular/core';
import { DirectoryService } from "app/directory/directory.service";
import { DirectoryItem } from "../entities/directory-item";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { GroupPipe } from "app/directory/group.pipe";
import { Industry } from "../entities/industry";
import { debounce } from "rxjs/operator/debounce";

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

  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private directory: DirectoryService,
    private route: ActivatedRoute,
    private router: Router,
    private groupFilter: GroupPipe,
    element: ElementRef,
    @Inject('alphabet') public alphabet: string[]
  ) {
    this.searchSubject
      .debounceTime(400)
      .subscribe(needle => {
        this.router.navigate(['/search', needle]);
      });

    Observable.combineLatest(
      this.directory.entries,
      route.params
    ).subscribe(([entries, params]) => {
      this.department = params['department'] || 'alle';
      this.letter = params['letter'] || 'alle';
      this.needle = params['needle'];
      this.groups = this.groupFilter.transform(entries, this.letter, this.department, this.needle);
    });

    directory.departments
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
