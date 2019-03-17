import { TestBed, async } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject } from '@angular/core/testing';

describe('DataService', () => {
  let service: DataService;

  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ],
    providers: [ 
      DataService
    ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

 it('#isLoggedIn should return false after creation', inject([DataService], (service: DataService) => {
  expect(service.isLoggedIn()).toBeFalsy();
}));

/*
it('#getObservableValue should return value from observable',
(done: DoneFn) => {
service.getDoctors().subscribe(value => {
  expect(Array.isArray(value)).toBe(true);
  done();
});
});

it('should use ValueService', () => {
  service = TestBed.get(DataService);
  expect(service.getDoctors()).toBe('real value');
});

it('passes if arrays are equal', function() {
  var arr = service.getDoctors();
  expect(Array.isArray(arr)).toBe(true);
});*/

});
