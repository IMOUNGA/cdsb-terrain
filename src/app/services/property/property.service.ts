import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Property} from "../../../lib/interfaces";

type PropertiesResponse = { properties: Property[] };

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  protected httpClient = inject(HttpClient);

  getProperties(): Observable<Property[]> {
    return this.httpClient.get<PropertiesResponse>('/assets/database/database.json').pipe(
      map(properties => properties.properties),
      catchError(err => {
        console.error('Error fetching properties', err);
        return of([]);
      })
    );
  }

  getPropertyById(id: number): Observable<Property | null> {
    return this.httpClient.get<PropertiesResponse>('/assets/database/database.json')
      .pipe(
        map(data => data.properties.find(property => property.id === id) ?? null),
        catchError(err => {
          console.error('Error fetching property', err);
          return of(null);
        })
      );
  }
}
