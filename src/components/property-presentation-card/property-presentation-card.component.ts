import { Component, input, OnInit } from '@angular/core';
import {Property} from "../../lib/interfaces";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/angular/standalone";
import {TruncatePipe} from "../../pipes/truncates/truncate-pipe";

@Component({
  selector: 'app-property-presentation-card',
  templateUrl: './property-presentation-card.component.html',
  styleUrls: ['./property-presentation-card.component.scss'],
  imports: [
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    TruncatePipe
  ]
})
export class PropertyPresentationCardComponent {
  readonly property = input.required<Property>();

  constructor() { }

  logFunc (data: Property) {
    console.log(data)
  }
}
