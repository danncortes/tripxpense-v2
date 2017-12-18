import { Injectable } from '@angular/core';

@Injectable()
export class ListViewTypeService {

  constructor() { }

  get(view) {
    let ls = JSON.parse(localStorage.getItem('list-type-view'));
    if (ls) {
      if (ls[view]) {
        return ls[view];
      }else {
        ls[view] = 'box';
        localStorage.setItem('list-type-view', JSON.stringify(ls))
        return 'box';
      }
    }else {
      ls = {[view]: 'box'};
      localStorage.setItem('list-type-view', JSON.stringify(ls));
      return 'box';
    }
  }

  set(view, listType) {
    let ls = JSON.parse(localStorage.getItem('list-type-view'));
    ls ? ls[view] = listType : ls = {[view]: listType};
    localStorage.setItem('list-type-view', JSON.stringify(ls));
  }

}
