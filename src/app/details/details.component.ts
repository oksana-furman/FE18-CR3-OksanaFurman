import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IProducts = {} as IProducts;
  id: number = 0;
  

  constructor(private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  addToCart(val: IProducts) {    
    window.alert('Your order has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
    });
  }
}
