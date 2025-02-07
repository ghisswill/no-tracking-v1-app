import { Component } from '@angular/core';
import { AngularOpenlayersModule } from "ng-openlayers";

@Component({
  selector: 'app-openlayer-map',
  standalone: true,
  imports: [AngularOpenlayersModule],
  templateUrl: './openlayer-map.component.html',
  styleUrl: './openlayer-map.component.css'
})
export class OpenlayerMapComponent {

}
