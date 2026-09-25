import { TestBed } from '@angular/core/testing';
import { Smard } from './smard';

describe('Smard', () => {
  let service: Smard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Smard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
