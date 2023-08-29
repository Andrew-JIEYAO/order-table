import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HealthInfo } from './health-info.interface';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HealthInfoService {

  url = 'http://localhost:3000/health';
  http = inject(HttpClient)

  constructor() { }

  getHealthInfo= async() : Promise<HealthInfo[]> => {
    const result$ = this.http.get<HealthInfo[]>(`${this.url}`)
    return await lastValueFrom(result$)
  }
}
