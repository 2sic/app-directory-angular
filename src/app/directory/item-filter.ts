// import { Inject, Injectable } from '@angular/core';
// import { DirectoryItem } from "../entities/directory-item";
// import { Observable } from "rxjs/Rx";
// import { DataService } from "app/directory/directory.service";
// import { ActivatedRoute } from "@angular/router";

// export class GroupedItems {
//   label: string;
//   entries: DirectoryItem[];
// }

// /**
//  * A filter / pipe to limit the resulting list based on the filter criterias
//  */
// @Injectable()
// export class ItemFilter {
//   constructor(
//     private data: DataService,

//     @Inject('alphabet') private alphabet: string[]
//   ) { }

//   public groupsFilteredByRoute(route: ActivatedRoute): Observable<GroupedItems[]> {
//     return Observable.combineLatest(
//       this.data.entries$,
//       route.params
//     ).map(([entries, params]) => {
//       let department = params['department'];
//       let firstChar = params['letter'];
//       let needle = params['needle'];
      
//       if (firstChar === 'all') firstChar = undefined;
//       if (department === 'all') department = undefined;
//       if (firstChar) firstChar = firstChar.toLocaleLowerCase();
//       if (needle) needle = needle.toLocaleLowerCase();


//       return this.alphabet

//         // only the selected letter
//         .filter(a => firstChar === undefined || a === firstChar)
//         .reduce((t, c) => {
//           let isNum = c === '1-10';
//           t.push({
//             label: c.toUpperCase(),
//             entries: entries.filter((e: DirectoryItem) => {
//               if (needle

//                 // not found in title
//                 && e.Title.toLocaleLowerCase().search(needle) === -1

//                 // has no town or not found in town
//                 && (!e.Town || e.Town.toLocaleLowerCase().search(needle) === -1)

//                 // has no departments or not found in department
//                 && (e.Industry.length === 0 || e.Industry[0].Title.toLocaleLowerCase().search(needle) === -1)) return false;

//               // filter by department
//               if (department && (e.Industry.length === 0 || e.Industry[0].Title !== department)) return false;

//               // only the current letter
//               return isNum ? ~~e.Title[0] : (e.Title[0].toLocaleLowerCase() === c);
//             }),
//           });
//           return t;
//         }, new Array<GroupedItems>())

//         // hide unused letters
//         .filter(g => g.entries.length > 0);
//     });

//   }

// }
