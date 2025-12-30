import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";
import {Property} from "../../../lib/interfaces";
import {PropertyService} from "../../services/property/property.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-batiment-detail',
  templateUrl: './batiment-detail.component.html',
  styleUrls: ['./batiment-detail.component.scss'],
  imports: [
    IonContent
  ]
})
export class BatimentDetailComponent {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);

  private readonly currentUrlId = this.route.snapshot.paramMap.get('id');

  private readonly propertyFromState = signal<Property | null>(
    history.state?.property ?? null
  );

  private readonly propertyFromApi = this.currentUrlId
    ? toSignal(this.propertyService.getPropertyById(+this.currentUrlId), {initialValue: null})
    : signal<Property | null>(null);


  readonly property = computed(() => this.propertyFromState() ?? this.propertyFromApi);

  constructor() {
    effect(() => {console.log(this.property())});
  }
}
