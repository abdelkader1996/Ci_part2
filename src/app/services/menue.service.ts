import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenueService {
  private url = 'http://localhost:3000/menus';

  constructor(private httpClient: HttpClient) {}

  getItemsList(): Observable<Item[]> {
    const itemsUrl = this.url + '';
    return this.httpClient.get<Item[]>(itemsUrl);
  }

  getCategoryList(): Observable<String[]> {
    const itemsUrl = this.url + '';
    return this.httpClient.get<Item[]>(itemsUrl).pipe(
      map((data) => data.map((el) => el.category)),
      map((data) => [...new Set(data)])
    );
  }
}

export interface Item {
  id: String;
  fullName: String;
  shortName: String;
  price: number;
  category: String;
  image: String;
  howMany: number;
}
