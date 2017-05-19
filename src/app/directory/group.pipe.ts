import { Pipe, PipeTransform, Inject } from '@angular/core';
import { DirectoryEntry } from "app/directory/directory-entry";

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  constructor(
    @Inject('alphabet') private alphabet: string[]
  ) {}

  transform(entries: DirectoryEntry[], firstChar: string = undefined, department: string = undefined, needle: string = undefined): DirectoryEntry[] {
    if (firstChar === 'alle') firstChar = undefined;
    if (department === 'alle') department = undefined;
    if (firstChar) firstChar = firstChar.toLocaleLowerCase();
    if (needle) needle = needle.toLocaleLowerCase();

    return this.alphabet
      .filter(a => firstChar === undefined || a === firstChar)
      .reduce((t, c) => {
        let isNum = c === '1-10';
        t.push({
          label: c.toUpperCase(),
          entries: entries.filter((e: DirectoryEntry) => {
            if (needle && e.Title.toLocaleLowerCase().search(needle) === -1) return false;
            if (department && (!e.Department[0] || e.Department[0].Title !== department)) return false;
            return isNum ? ~~e.Title[0] : (e.Title[0].toLocaleLowerCase() === c);
          }),
        });
        return t;
      }, [])
      .filter(g => !needle || g.entries.length > 0);
  }
}
