import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarcomunicationserviceService } from '../../services/sidebarcomunicationservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  estudiantesCollapse: boolean = false;
  actosCertificacionCollapse: boolean = false;
  requisitosCollapse: boolean = false;
  configuracionCollapse: boolean = false;

  private sidebarVisibilitySubscription: Subscription = new Subscription();


  constructor(
    public sidebarCommunicationService: SidebarcomunicationserviceService,
    ) { }

  ngOnInit(): void {

    this.sidebarVisibilitySubscription = this.sidebarCommunicationService.sidebarVisible$.subscribe(
      (isVisible: boolean) => {
        this.sidebarVisible = isVisible;
      }
    )
  }

  ngOnDestroy() {
    if (this.sidebarVisibilitySubscription) {
      this.sidebarVisibilitySubscription.unsubscribe();
    }
  }

}
