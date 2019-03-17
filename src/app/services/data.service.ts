import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

    // Get Doctors
    getDoctors(): Observable<Doctor[]> {
      return this.http.get<Doctor[]>(`${this.apiUrl}${'/users'}`);
    }
    /*
    getDoctor(id: number): Observable<Doctor> {
      return this.http.get<Doctor>(`${this.apiUrl}${'/users'}/${id}`)
    }
    */

    // Get Tasks
    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.apiUrl}${'/todos'}`);
    }
    /*
    getTask(id: number): Observable<Task> {
      return this.http.get<Task>(`${this.apiUrl}${'/todos'}/${id}`)
    }
    */

    // Get Tasks By User ID
    getTasksById(id: number): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.apiUrl}${'/todos?userId'}=${id}`)
    }


    // only for testing purpose
private loggedIn: boolean = false;
    isLoggedIn() {
      return this.loggedIn;
    }

}
