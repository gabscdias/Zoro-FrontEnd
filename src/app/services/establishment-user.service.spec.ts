import { TestBed } from '@angular/core/testing';

import { EstablishmentUserService } from './establishment-user.service';

describe('EstablishmentUserService', () => {
  let service: EstablishmentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
