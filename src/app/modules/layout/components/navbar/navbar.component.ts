import { Component, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { SidebarcomunicationserviceService } from '../../services/sidebarcomunicationservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sidebarCommunicationService = inject(SidebarcomunicationserviceService);

  ngOnInit() {
    
  }
  toggleSidebar() {
    this.sidebarCommunicationService.toggleSidebar();
  }
}
