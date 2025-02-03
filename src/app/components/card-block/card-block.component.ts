import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent implements OnInit{

  cards: Card[] = [];


  constructor() {}
  ngOnInit() {
    this.cards = [
      {
        label: 'Online Users',
        value: 6,
        description: `<Valeur>
                      Nombre de Vehicules en ligne 
                      à la palce de l'ecran`
      },
      {
        label: 'Created Today (Official)',
        value: 0,
        description: ''
      },
      {
        label: 'Active Subscriptions',
        value: 65,
        description: `Nombre total d'utilisateur`
      },
      {
        label: 'Open Connections',
        value: 6,
        description: `Nombre de kilometres parcourus ce mois
                      - jour avec le plus km
                      - jour avec le mons de km`
      },
      {
        label: 'Create Today (Trials)',
        value: 0,
        description: ''
      }
    ]
  }

}
