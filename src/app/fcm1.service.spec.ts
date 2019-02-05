import { TestBed } from '@angular/core/testing';

import { FcmService } from './fcm1.service';

describe('Fcm1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcmService = TestBed.get(FcmService);
    expect(service).toBeTruthy();
  });
});
