import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/table-users';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getTableData(): Observable<Student> {
    const URL = `${this.baseURL}/users`;
    return this.http.get<Student>(URL);
  }


}
