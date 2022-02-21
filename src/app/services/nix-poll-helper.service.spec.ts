import { TestBed } from '@angular/core/testing';

import { NixPollHelperService } from './nix-poll-helper.service';

describe('NixPollHelperService', () => {
  let service: NixPollHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NixPollHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
