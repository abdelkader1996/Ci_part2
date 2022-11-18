import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css'],
})
export class WaitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  recived() {
    this.router.navigate(['payement']);
  }
}
