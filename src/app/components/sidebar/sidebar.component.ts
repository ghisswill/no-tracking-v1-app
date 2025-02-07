import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Child, MenuItem } from '../../models/child.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  isSidebarCollapsed: boolean = false;
  sidebarToggle = new EventEmitter<void>();
  menuItems: MenuItem[] = [];
  reportCenterChildren: Child[] = [];
  helpCenterChildren: Child[] = [];
  
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.menuItems = [
      {
        icon: "fa-solid fa-chart-simple",
        label: "Dashbord"
        //label: this.translate.instant('sidebar.menu.dashoard')
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
    ],
    this.reportCenterChildren = [
      {icon: "", label: "ACC Report"},
      {icon: "", label: "Historical Data Report"},
      {icon: "", label: "Query Data by speed"},
      {icon: "", label: "Running Statement"},
      {icon: "", label: "Daily Data Stat. Report"},
      {icon: "", label: "Trip Report"},
      {icon: "", label: "Advanded Trip Report"},
      {icon: "", label: "Fuel consumption chart"},
      {icon: "", label: "Advanded Fuel consumption chart"},
      {icon: "", label: "Speed Chart"},
      {icon: "", label: "All Alarm Report"},
      {icon: "", label: "Urgent Alarm Report"},
      {icon: "", label: "Overspeed Alarm Report"},
      {icon: "", label: "Iridium Data Report"},
      {icon: "", label: "Mileage Report"},
      {icon: "", label: "Historic Photos"},
      {icon: "", label: "Track Replay"},
      {icon: "", label: "Travel Summary"},
      {icon: "", label: "RFID Report"},
      {icon: "", label: "OBD Report"},
      {icon: "", label: "Error Code Report"},
      {icon: "", label: "Mileage Fuel Report"},
      {icon: "", label: "Speed Sift Report"},
      {icon: "", label: "Alarm Report"},
      {icon: "", label: "Vehicule Report"},
      {icon: "", label: "Vehicule Information"},
      {icon: "", label: "Terminal Installation Report"},
      {icon: "", label: "Technicains Report"},
      {icon: "", label: "Last Real Time Report"}
    ],
    this.helpCenterChildren = [
      {icon: "", label: "GOV Report"},
      {icon: "", label: "Online Repport"},
      {icon: "", label: "Offline Report"}
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
