import { TestBed } from '@angular/core/testing';

import { LoadInterceptor } from './load-interceptor.service';

describe('LoadInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadInterceptor = TestBed.inject(LoadInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
