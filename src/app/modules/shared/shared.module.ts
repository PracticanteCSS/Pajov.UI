import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// primeng
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ToastModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule,
    FloatLabelModule,
    CalendarModule,
    OverlayPanelModule,
    InputTextareaModule,
    CheckboxModule,
    ScrollTopModule,
    NgxPermissionsModule.forRoot()
  ],
  exports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ToastModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule,
    FloatLabelModule,
    CalendarModule,
    OverlayPanelModule,
    InputTextareaModule,
    CheckboxModule,
    ScrollTopModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class SharedModule { }
