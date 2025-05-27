import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../tokens/api-base-url.token';

@Injectable()
export class ApiHttpClient {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  get<T>(
    path: string,
    { params }: { params?: HttpParams } = {},
  ): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${path}`, { params });
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}${path}`, body);
  }

  put<T>(path: string, body: unknown): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${path}`, body);
  }

  patch<T>(path: string, body: unknown): Observable<T> {
    return this.httpClient.patch<T>(`${this.baseUrl}${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${path}`);
  }
}
