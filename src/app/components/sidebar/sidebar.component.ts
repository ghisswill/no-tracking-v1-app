import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  isSidebarCollapsed: boolean = false;
  sidebarToggle = new EventEmitter<void>();
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        icon: "fa-solid fa-chart-simple",
        label: "Dashoard"
      },
      {
        icon: "fa-solid fa-users-line",
        label: "Groupe"
      },
      {
        icon: "fa-solid",
        label: "Véhicules"
      },
      {
        icon: "fa-solid fa-user",
        label: "Users",
        isOpen: false,
        children: [
          {icon: "fa-solid fa-user",label: "Setting"},
          {icon: "fa-solid fa-user",label: "Profile"},
        ]
      },
      {
        icon: "fa-solid",
        label: "Revendeurs"
      },
      {
        icon: "fa-solid",
        label: "Centre d'aide"
      },
      {
        icon: "fa-solid",
        label: "Centre des rapports"
      },
      {
        icon: "fa-solid",
        label: "Ajout carte"
      },
      {
        icon: "fa-solid",
        label: "Option"
      },
      {
        icon: "fa-solid",
        label: "Configuration"
      },
      {
        icon: "fa-solid",
        label: "Theme page"
      },
      {
        icon: "fa-solid",
        label: "Barrière virtuelle"
      }
    ]
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

}
