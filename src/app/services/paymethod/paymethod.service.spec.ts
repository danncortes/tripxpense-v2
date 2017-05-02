import { TestBed, inject } from '@angular/core/testing';

import { PaymethodService } from './paymethod.service';

describe('PaymethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymethodService]
    });
  });

  it('should ...', inject([PaymethodService], (service: PaymethodService) => {
    expect(service).toBeTruthy();
  }));
});
