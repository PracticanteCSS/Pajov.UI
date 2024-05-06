import { Component, EventEmitter, Output } from '@angular/core';
import { Caja } from '../../../../models/caja';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CajaCompensacionService } from '../../service/cajacompensacion.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from 'express';

@Component({
  selector: 'app-listarcajacompensacion',
  templateUrl: './listarcajacompensacion.component.html',
  styleUrl: './listarcajacompensacion.component.scss'
})
export class ListarCajaCompensacionComponent {
  @Output() closeModal = new EventEmitter<void>();
  abrirModal() {
    this.ModalAsignarCaja = true;
  }
  ModalAsignarCaja: boolean = false;
  ModalEditarCaja: boolean = false;

  clear() {
    this.ModalAsignarCaja = false;
    this.CajaActual = null;
  }

  Caja: Caja[] = [];
  CajaCopia: Caja[] = [];
  CajaActual:Caja | null = null;
  titulo: string = 'CAJA COMPENSACION';

  constructor(
    private _CajaService: CajaCompensacionService,
    private _menssageService: MessageService,
    private _confirmationService: ConfirmationService,
    private router: Router
    ){}

    ngOnInit(): void{
      
    }

    listarCaja() {
      this._CajaService.consultarCajaCompensacion().subscribe({
        next: (data) => {
          console.log(data);
          this.Caja = data;
          this.CajaCopia = [...this.Caja];
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
}
