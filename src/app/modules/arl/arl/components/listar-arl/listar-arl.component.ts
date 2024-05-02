import { Component, EventEmitter, Output } from '@angular/core';
import { Arl } from '../../../../../models/arl';
import { FormGroup } from '@angular/forms';
import { ArlService } from '../../service/arl.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-arl',
  templateUrl: './listar-arl.component.html',
  styleUrl: './listar-arl.component.scss'
})
export class ListarArlComponent {
  @Output() closeModal = new EventEmitter<void>();
  abrirModal() {
    this.ModalAsignarArl = true;
  }
  ModalAsignarArl: boolean = false;
  ModalEditarArl: boolean = false;

  clear() {
    this.ModalAsignarArl = false;
    this.ArlActual = null;
  }

  Arl: Arl[] = [];
  ArlCopia: Arl[] = [];
  ArlActual:Arl | null = null;
  titulo: string = 'ARL';


  constructor(
    private _ArlService: ArlService,
    private _menssageService: MessageService,
    private _confirmationService: ConfirmationService,
    private router: Router
    ){}

    ngOnInit(): void{
      this.listarArl();
      
    }

    listarArl() {
      this._ArlService.listarArl().subscribe({
        next: (data) => {
          console.log(data);
          this.Arl = data;
          this.ArlCopia = [...this.Arl];
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
}
