import { TestBed, inject } from '@angular/core/testing';

import { GetapisService } from './getapis.service';

describe('GetapisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetapisService]
    });
  });

  it('should be created', inject([GetapisService], (service: GetapisService) => {
    expect(service).toBeTruthy();
  }));
});
