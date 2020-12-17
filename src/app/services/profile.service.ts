import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  signUp(userData: Profile) {
    return this.http.post<Profile>(`${environment.serverUrl}/users/register`, userData);
  }
}
