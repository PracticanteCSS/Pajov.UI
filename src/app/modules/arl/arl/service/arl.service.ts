import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArlService {

  apiUrl = `${environment.baseUrlApi}/Arl`; 

  constructor(private http: HttpClient) {}
  crearArl(arl: any){}
}

