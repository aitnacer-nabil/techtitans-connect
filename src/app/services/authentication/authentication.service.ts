import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../models/user";
import {LoginRequest} from "../../models/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public apiBaseUrl: string = 'http://localhost:8222/api/v1/auth/';
  private token: string | null = null;
  private user: User | null = null;
  private loggedIn: boolean = false;
  private jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient) {
  }

  public login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}token`, loginRequest, { responseType: 'text' });
  }

  public register(user: User): Observable<HttpResponse<User | HttpErrorResponse>> {
    return this.http.post<User | HttpErrorResponse>(`${this.apiBaseUrl}register`, user, {observe: 'response'});
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    localStorage.removeItem('user')
  }

  public isAuthenticated(): boolean {
    this.loadToken();
    console.log(this.token);
    if (this.token !== null && this.token !== ' ' && !this.jwtHelper.isTokenExpired(this.token)) {
      console.log('Token is not expired')
      console.log('Token is not null');
      return true;
    }
    this.logout();
    return false;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalStorage(): User | null {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token');
    this.loggedIn = this.token !== null;
  }


}
