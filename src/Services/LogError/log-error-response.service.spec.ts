import { TestBed } from '@angular/core/testing';

import { LogErrorResponseService } from './log-error-response.service';

describe('LogErrorResponseService', () => {
  let service: LogErrorResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogErrorResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
