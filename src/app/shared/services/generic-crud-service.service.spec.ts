import { TestBed } from '@angular/core/testing';

import { GenericCrudServiceService } from './generic-crud-service.service';

describe('GenericCrudServiceService', () => {
  let service: GenericCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
