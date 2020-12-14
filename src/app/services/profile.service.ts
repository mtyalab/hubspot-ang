import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';

const baseUrl = `${environment.serverUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  signUp(userData) {
    return this.http.post<Profile>(`${baseUrl}/sign-up`, userData);
  }
}
