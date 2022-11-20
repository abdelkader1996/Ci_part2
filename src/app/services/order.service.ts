import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './menue.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  BFF_URL = 'http://localhost:8080/order';
  // table number
  TABLE_NUMBER = 1;
  //
  itemsToOrder: Item[] = [];
  priceToPay = 0;

  constructor(private router: Router, private httpClient: HttpClient) {}

  additem(item: Item) {
    this.itemsToOrder.push(item);
    this.priceToPay += item.price;
    console.log('items', this.itemsToOrder);
    console.log('to pay:', this.priceToPay);
  }
  startNewOrder(tableid: number) {
    //TODO
    //route to create new Order
    //
  }
  delete(item: any) {
    this.itemsToOrder = this.itemsToOrder.filter((i) => i != item);
  }

  getTables() {
    return this.httpClient.get<any>('http://localhost:3001/tables');
  }

  order() {
    //
    //send order to BFF
    //TODO
    let payload = [];
    console.log(this.itemsToOrder.map((item) => (item.howMany = 1)));

    this.httpClient
      .post<any>(
        'http://localhost:8080/order/' + this.TABLE_NUMBER,
        this.itemsToOrder.map((item) => {
          item.howMany = 1;
          return item;
        })
      )
      .subscribe((data) => {
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
    this.httpClient
      .post<any>(
        'http://localhost:8080/payment/' +
          this.TABLE_NUMBER +
          '/' +
          this.priceToPay,
        {}
      )
      .subscribe((data) => {
        //
        console.log(data);
      });

    this.router.navigate(['']);
  }
  payeall() {
    //TODO
    //payement  to data base
    //route to Paye
    this.httpClient
      .post<any>('http://localhost:8080/payment/' + this.TABLE_NUMBER, {})
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['']);
  }
}
