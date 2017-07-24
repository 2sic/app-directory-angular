import { Pipe, PipeTransform, Inject } from '@angular/core';
import { DirectoryEntry } from "app/directory/directory-entry";

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  constructor(
    @Inject('alphabet') private alphabet: string[]
  ) { }

  transform(entries: DirectoryEntry[], firstChar: string = undefined, department: string = undefined, needle: string = undefined): DirectoryEntry[] {
    if (firstChar === 'alle') firstChar = undefined;
    if (department === 'alle') department = undefined;
    if (firstChar) firstChar = firstChar.toLocaleLowerCase();
    if (needle) needle = needle.toLocaleLowerCase();

    return this.alphabet

      // only the selected letter
      .filter(a => firstChar === undefined || a === firstChar)
      .reduce((t, c) => {
        let isNum = c === '1-10';
        t.push({
          label: c.toUpperCase(),
          entries: entries.filter((e: DirectoryEntry) => {
            if (needle

              // not found in title
              && e.Title.toLocaleLowerCase().search(needle) === -1

              // has no town or not found in town
              && (!e.Town || e.Town.toLocaleLowerCase().search(needle) === -1)

              // has no departments or not found in department
              && (e.Department.length === 0 || e.Department[0].Title.toLocaleLowerCase().search(needle) === -1)) return false;
            
            // filter by department
            if (department && (e.Department.length === 0 || e.Department[0].Title !== department)) return false;

            // only the current letter
            return isNum ? ~~e.Title[0] : (e.Title[0].toLocaleLowerCase() === c);
          }),
        });
        return t;
      }, [])

      // hide unused letters
      .filter(g => g.entries.length > 0);
  }
}
