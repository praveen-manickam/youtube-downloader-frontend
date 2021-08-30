import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(
    private http: HttpClient
  ) { }
  addVideoToQueue(data: any) {
    return this.http.post(`${environment.apiUrl}/jobs/new`, data);
  }
  getVideo(videoUrl: string) {
    return this.http.get<Blob>(videoUrl, {
      headers: new HttpHeaders({
        'accept': 'application/octet-stream',
        'content-type': 'application/json'
      }),
      responseType: 'blob' as 'json'
    })
  }
}