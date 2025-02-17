import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from "../header/header.component";
import { CardBlockComponent } from "../card-block/card-block.component";
import { MapsComponent } from "../maps/maps.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CardBlockComponent, MapsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isShowSidebar: boolean = true;
  count: number = 0;

showSider() {
  this.isShowSidebar = !this.isShowSidebar;
}

}
