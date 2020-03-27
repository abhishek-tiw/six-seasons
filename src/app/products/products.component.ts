import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 16; i++) {
      this.products.push(i);
    }
  }

}