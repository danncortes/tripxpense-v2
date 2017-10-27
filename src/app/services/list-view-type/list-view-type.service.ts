import { Injectable } from '@angular/core';

@Injectable()
export class ListViewTypeService {

  constructor() { }

  get(view) {
    if (!localStorage.getItem('list-type-view')) {
      localStorage.setItem('list-type-view', JSON.stringify({ [view]: 'box'}))
    }
    return JSON.parse(localStorage.getItem('list-type-view'))[view];
  }

  set(view, listType) {
    localStorage.setItem('list-type-view', JSON.stringify({ [view]: listType}))
  }

}
