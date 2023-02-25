import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../iproducts';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Array<IProducts> = products;

  constructor() { }

  ngOnInit(): void {
  }

}
