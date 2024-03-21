import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  private url = 'http://localhost:8222/api/v1/users/logged';

  constructor(private http: HttpClient) { }

  getProfile() {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTEwMjg2MTgsImV4cCI6MTcxMTAzMDQxOH0.KZYpmzse5sumhFE--ZMisvkP9AbHB42osdYeYeuH8ss';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.url, { headers });
  }


}
