import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Property} from "../../../lib/interfaces";

type PropertiesResponse = { property: Property[] };

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  protected httpClient = inject(HttpClient);

  getProperties(): Observable<Property[]> {
    return this.httpClient.get<PropertiesResponse>('/assets/database/database.json').pipe(
      tap(properties => console.log(properties)),
      map(properties => properties.property)
    );
  }
}
