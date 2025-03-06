import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'
  constructor(
    private router:Router, 
    private http:HttpClient
  ) {}

  login(
    email:string, 
    password:string
  ):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, 
      { email, 
        password 
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  signup(
    email:string, 
    password:string, 
    username:string
  ):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, 
      {
        email, 
        password, 
        username
      });    
  }

}
