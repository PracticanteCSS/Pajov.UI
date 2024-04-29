import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { ArlService } from '../../service/arl.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Arl } from '../../../../../models/arl';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-arl',
  templateUrl: './crear-arl.component.html',
  styleUrl: './crear-arl.component.scss'
})
export class CrearArlComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() closeModalEditar = new EventEmitter<void>();
  @Input() arl: Arl | null = null
  ModalAsignarValor: boolean = false;
  arls: Arl[] = [];
  formulario: FormGroup;

  constructor(
    private router: Router,
    private arlSvc: ArlService,
    private msgSvc: MessageService,
    private form: FormBuilder
  ){
    this.formulario = this.form.group({

    });
  }ngOnInit(): void{
    this.ModalAsignarValor = true;
  }
}
