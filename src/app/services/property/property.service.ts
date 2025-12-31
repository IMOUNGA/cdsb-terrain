import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {find, map, Observable, tap} from "rxjs";
import {Property} from "../../../lib/interfaces";

type PropertiesResponse = { properties: Property[] };
type PropertyResponse = { property: Property };

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  protected httpClient = inject(HttpClient);

  getProperties(): Observable<Property[]> {
    return this.httpClient.get<PropertiesResponse>('/assets/database/database.json').pipe(
      tap(properties => console.log(properties)),
      map(properties => properties.properties)
    );
  }

  getPropertyById(id: number): Observable<Property | null> {
    return this.httpClient.get<PropertiesResponse>('/assets/database/database.json')
      .pipe(
        map(data => data.properties.find(property => property.id === id) ?? null),
        tap(property => console.log(property))
      );
  }
}
