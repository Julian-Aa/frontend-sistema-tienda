import { TestBed } from '@angular/core/testing';

import { CreateProviderService } from './create-provider.service';

describe('CreateProviderService', () => {
  let service: CreateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
