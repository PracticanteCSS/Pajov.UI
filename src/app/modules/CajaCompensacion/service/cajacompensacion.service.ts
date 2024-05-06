import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Caja } from '../../../models/caja';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CajaCompensacionService {

  apiUrl = `${environment.baseUrlApi}/CajaCompensacion`; 

  constructor(private http: HttpClient) {}

  crearCajaCompensacion(formulario: Caja){
    return this.http.post<Caja>(
      `${this.apiUrl}/CrearCajaCompensacion`,
      formulario
    );
  }

  editarCajaCompensacion(formulario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/EditarCajaCompensacion`, formulario)
  }

  consultarCajaCompensacion(){
    return this.http.get<Caja[]>(
      `${this.apiUrl}/ConsultarCajaCompensacion`
    );
  }

  consultarCajaById(IdCaja: number): Observable<Caja>{
    return this.http.get<Caja>(
      `${this.apiUrl}/ConsultarCajaById?IdCaja=${IdCaja}`
    );
  }

  eliminarCajaCompensacion(IdCaja: number): Observable<any>{
    const url = `${this.apiUrl}/EliminarCajaCompensacion/${IdCaja}`;
    return this.http.delete(url);
  }
}