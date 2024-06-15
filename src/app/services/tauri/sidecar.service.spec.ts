import { TestBed } from '@angular/core/testing';

import { SidecarService } from './sidecar.service';

describe('SidecarService', () => {
  let service: SidecarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidecarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
