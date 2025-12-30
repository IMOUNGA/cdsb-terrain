import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {find, map, Observable, tap} from "rxjs";
import {Property} from "../../../lib/interfaces";

type PropertiesResponse = { property: Property[] };
type PropertyResponse = { property: Property };

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

  getPropertyById(id: number): Observable<Property | undefined> {
    return this.httpClient.get<PropertyResponse>('/assets/database/database.json').pipe(
      map(properties => properties.property),
      find(property => property.id === id),
  );
  }
}
