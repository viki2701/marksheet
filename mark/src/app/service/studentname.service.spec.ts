import { TestBed } from '@angular/core/testing';

import { StudentnameService } from './studentname.service';

describe('StudentnameService', () => {
  let service: StudentnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
