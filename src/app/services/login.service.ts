import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { Login } from '../models/login';
const URL = "http://localhost:3000/login";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getuser():Observable<Login>{
    return this.http.get<Login>(URL);
    }
   
}
