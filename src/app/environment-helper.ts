import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentHelper {
  private http = inject(HttpClient);
  
  private baseUrl = environment.apiUrl;

  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }
}
