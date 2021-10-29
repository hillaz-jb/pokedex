import { TestBed } from '@angular/core/testing';

import { SpokedexService } from './spokedex.service';

describe('SpokedexService', () => {
  let service: SpokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
