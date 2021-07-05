import { TestBed } from '@angular/core/testing';

import { ProgramersService } from './programers.service';

describe('ProgramersService', () => {
  let service: ProgramersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
