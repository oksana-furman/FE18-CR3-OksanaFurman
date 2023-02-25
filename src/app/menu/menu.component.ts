import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
products: Array<IProducts> = products;
items: IProducts[] = [];

  constructor(private cartService: CartService) { }

  addToCart(val: IProducts) {
    window.alert('Your order has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }

}
