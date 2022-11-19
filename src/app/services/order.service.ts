import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './menue.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // table number
  TABLE_NUMBER = 1;
  //
  itemsToOrder: String[] = [];
  priceToPay = 0;

  constructor(private router: Router, private httpClient: HttpClient) {}

  additem(item: Item) {
    this.itemsToOrder.push(item.shortName);
    this.priceToPay += item.price;
    console.log('items', this.itemsToOrder);
    console.log('to pay:', this.priceToPay);
  }
  startNewOrder(tableid: number) {
    //TODO
    //route to create new Order
    this.httpClient.post<any>('', {}).subscribe((data) => {
      //
    });

    //
  }
  delete(item: any) {
    this.itemsToOrder = this.itemsToOrder.filter((i) => i != item);
  }

  order() {
    //
    //send order to BFF
    //TODO
    this.httpClient.post<any>('', {}).subscribe((data) => {
      //
    });
    //
    //routing to waiting :
    this.router.navigate(['wait']);
  }

  paye() {
    //TODO
    //payement  to data base
    //route to Paye
    this.httpClient.post<any>('', {}).subscribe((data) => {
      //
    });

    this.router.navigate(['']);
  }
}
