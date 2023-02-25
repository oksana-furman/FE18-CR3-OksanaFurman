import { Component, OnInit } from '@angular/core';
import { IProducts } from '../iproducts';
import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];
  total : number = 0;

  plusQtty(i: number){
    this.cartService.plusQtty(i);
    this.total = this.cartService.total()
  }
  minusQtty(i: number){
    this.cartService.minusQtty(i);
    this.total = this.cartService.total();
  }
  deleteQtty(i:number){
    this.cartService.deleteQtty(i);
    this.total = this.cartService.total();
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

    this.total = this.cartService.total()
  }

}
