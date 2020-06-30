import { TestBed } from '@angular/core/testing';

import { BlockChainSystemService } from './block-chain-system.service';

describe('BlockChainSystemService', () => {
  let service: BlockChainSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockChainSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
