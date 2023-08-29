import { TestBed } from '@angular/core/testing';

import { MerchantserviceService } from './merchantservice.service';

describe('MerchantserviceService', () => {
  let service: MerchantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
