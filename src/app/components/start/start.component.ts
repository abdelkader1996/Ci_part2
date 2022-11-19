import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {}
  start() {
    //order with table ID
    this.orderService.startNewOrder(0);
    //
    this.router.navigate(['menue']);
  }
}
