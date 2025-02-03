import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() card = new Card();
}
