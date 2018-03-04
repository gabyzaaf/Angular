import { TestBed, inject } from '@angular/core/testing';

import { AlbumGardsService } from './album-gards.service';

describe('AlbumGardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumGardsService]
    });
  });

  it('should be created', inject([AlbumGardsService], (service: AlbumGardsService) => {
    expect(service).toBeTruthy();
  }));
});
