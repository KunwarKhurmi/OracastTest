import { TestBed } from '@angular/core/testing';

import { VersionCodeService } from './version-code.service';

describe('VersionCodeService', () => {
  let service: VersionCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersionCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
