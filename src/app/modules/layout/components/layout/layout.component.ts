import { Component } from '@angular/core';
import { SidebarcomunicationserviceService } from '../../services/sidebarcomunicationservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarVisible: boolean = true;
  private sidebarSubscription!: Subscription;
  constructor(
    public sidebarService: SidebarcomunicationserviceService,
  ) {

  }
  ngOnInit(): void {
    this.sidebarSubscription = this.sidebarService.sidebarVisible$.subscribe(
      (isVisible) => {
        this.sidebarVisible = isVisible;
      }
    )

  }
}
