import { TestBed, inject } from '@angular/core/testing';

import { ListViewTypeService } from './list-view-type.service';

describe('ListViewTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListViewTypeService]
    });
  });

  it('should be created', inject([ListViewTypeService], (service: ListViewTypeService) => {
    expect(service).toBeTruthy();
  }));
});
