import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponent } from './doctors.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from '../../services/data.service';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;
  let service: DataService;
  const dummyDoctors = [
    { id:1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
    { id:2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [ DoctorsComponent ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
