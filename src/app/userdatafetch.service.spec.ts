import { TestBed } from '@angular/core/testing';

import { UserdatafetchService } from './userdatafetch.service';

describe('UserdatafetchService', () => {
  let service: UserdatafetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdatafetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
