import {ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, Signal, signal} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";
import {Property} from "../../../lib/interfaces";
import {PropertyService} from "../../services/property/property.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgStyle} from "@angular/common";
import {first, Observable, of} from "rxjs";
import {ENERGY_RATING_CONFIG} from "../../../lib/utils/property-energy-rating";

@Component({
  selector: 'app-batiment-detail',
  templateUrl: './batiment-detail.component.html',
  styleUrls: ['./batiment-detail.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    NgStyle,
    AsyncPipe
  ]
})
export class BatimentDetailComponent {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);
  readonly ENERGY = ENERGY_RATING_CONFIG;

  property$: Observable<Property | null> = this.initProperty();

  constructor() {
    this.initProperty();
  }

  initProperty () {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return of(null);

    return this.propertyService.getPropertyById(+id)
  }

}
