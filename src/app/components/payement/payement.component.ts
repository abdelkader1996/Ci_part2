import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/services/menue.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css'],
})
export class PayementComponent implements OnInit {
  totale = 0;
  items: Item[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.totale = this.orderService.priceToPay;
    this.items = this.orderService.itemsToOrder;
  }
  payer() {
    this.orderService.paye();
    this.orderService.payeall();
  }
}
