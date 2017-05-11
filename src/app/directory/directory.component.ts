import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DirectoryService } from "app/directory/directory.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  @Input() name: string;
  @Output() blah = new EventEmitter();
  
  constructor(
    private directory: DirectoryService
  ) { }

  ngOnInit() {
    this.blah.emit("asdasd");
  }
}
