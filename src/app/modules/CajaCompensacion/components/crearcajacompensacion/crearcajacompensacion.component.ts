import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CajaCompensacionService } from '../../service/cajacompensacion.service';
import { Caja } from '../../../../models/caja';

@Component({
  selector: 'app-crearcajacompensacion',
  templateUrl: './crearcajacompensacion.component.html',
  styleUrl: './crearcajacompensacion.component.scss'
})
export class CrearCajaCompensacionComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() closeModalEditar = new EventEmitter<void>();
  @Input() caja: Caja | null = null
  ModalAsignarCaja: boolean = false;
  cajas: Caja[] = [];
  formulario: FormGroup;

  constructor(
    private router: Router,
    private cajaSvc: CajaCompensacionService,
    private msgSvc: MessageService,
    private form: FormBuilder
  ){
    this.formulario = this.form.group({

    });
  }ngOnInit(): void{
    this.ModalAsignarCaja = true;
  }
}