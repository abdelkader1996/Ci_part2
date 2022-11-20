import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  selectedValue: number = 1;
  tables: any = [];
  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.itemsToOrder = [];
    this.orderService.priceToPay = 0;
    this.orderService.getTables().subscribe((data) => {
      this.tables = data;
    });
    console.log('items to order:', this.orderService.itemsToOrder);
  }
  start() {
    //order with table ID
    this.orderService.startNewOrder(0);
    this.orderService.TABLE_NUMBER = this.selectedValue;
    //
    this.router.navigate(['menue']);
  }
}
