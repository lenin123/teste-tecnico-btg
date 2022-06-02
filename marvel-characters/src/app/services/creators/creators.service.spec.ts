/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatorsService } from './creators.service';

describe('Service: Creators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatorsService]
    });
  });

  it('should ...', inject([CreatorsService], (service: CreatorsService) => {
    expect(service).toBeTruthy();
  }));
});
