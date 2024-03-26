import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  private url = 'http://localhost:8222/api/v1/users/logged';
  private url1 = 'http://localhost:8222/api/v1/users/updated';

  constructor(private http: HttpClient) { }

  getProfile() {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJ5YXNzaW5lMUBnbWFpbC5jb20iLCJzdWIiOiJ5YXNzaW5lMSIsImlhdCI6MTcxMTQ1MDIyOCwiZXhwIjoxNzExNDUyMDI4fQ.HdnEBRNF4hhmMx_ppn67iRQKXNW9QSVzXnQWO8FqBL8';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.url, { headers });
  }

// Add this method inside the EditprofileService class
  updateProfile(user: any): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJ5YXNzaW5lMUBnbWFpbC5jb20iLCJzdWIiOiJ5YXNzaW5lMSIsImlhdCI6MTcxMTQ1MDIyOCwiZXhwIjoxNzExNDUyMDI4fQ.HdnEBRNF4hhmMx_ppn67iRQKXNW9QSVzXnQWO8FqBL8';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(this.url1, user, { headers });
  }
}
