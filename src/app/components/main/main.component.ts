import { Component, OnInit } from '@angular/core';
import { Item, MenueService } from 'src/app/services/menue.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  items: Item[] = [];
  totale = 0;
  itemsToOrder: Item[] = [];

  constructor(
    private menueService: MenueService,
    private orderService: OrderService
  ) {}

  delete(item: any) {
    this.orderService.delete(item);
  }

  ngOnInit(): void {
    this.menueService.getItemsList().subscribe((data) => {
      this.items = data;
      console.log(data);
    });

    console.log('table number : ', this.orderService.TABLE_NUMBER);
  }
  validate_order() {
    this.orderService.order();
  }

  additem(item: Item) {
    this.orderService.additem(item);
    this.itemsToOrder = this.orderService.itemsToOrder;
    this.totale = this.orderService.priceToPay;
  }
}
