import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  private url = 'http://localhost:8222/api/v1/users/logged';
  private url1 = 'http://localhost:8222/api/v1/users/updated';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getProfile() {
    const token = this.authenticationService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.url, {headers});
  }

// Add this method inside the EditprofileService class
  updateProfile(user: any): Observable<any> {
    const token = this.authenticationService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(this.url1, user, {headers});
  }
}
