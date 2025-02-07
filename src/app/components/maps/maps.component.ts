import { Component } from '@angular/core';
import { OpenlayerMapComponent } from "./openlayer-map/openlayer-map.component";

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [OpenlayerMapComponent],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {

}
