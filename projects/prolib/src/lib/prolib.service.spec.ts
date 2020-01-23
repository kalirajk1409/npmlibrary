import { TestBed } from '@angular/core/testing';

import { ProlibService } from './prolib.service';

describe('ProlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProlibService = TestBed.get(ProlibService);
    expect(service).toBeTruthy();
  });
});
