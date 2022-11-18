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

  constructor(private router: Router) {}

  additem(item: Item) {
    this.itemsToOrder.push(item.shortName);
    this.priceToPay += item.price;
    console.log('items', this.itemsToOrder);
    console.log('to pay:', this.priceToPay);
  }

  delete(item: any) {
    this.itemsToOrder = this.itemsToOrder.filter((i) => i != item);
  }

  order() {
    //
    //send order to BFF
    //TODO

    //
    //routing to waiting :
    this.router.navigate(['wait']);
  }

  paye() {
    //TODO
    //payement  to data base

    this.router.navigate(['']);
  }
}
