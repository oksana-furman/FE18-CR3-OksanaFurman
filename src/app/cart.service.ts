import { Injectable } from '@angular/core';
import { IProducts } from './iproducts'; 


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProducts[] = [];
  
  constructor() { }

  addToCart(product:IProducts){
    if(this.items.find(function(val) {return val.name == product.name})) {
      product.qtty++;
    } else {
      this.items.push(product);
    }  
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  plusQtty(i:number){
    this.items[i].qtty++;
  }
  minusQtty(i:number){
    if(this.items[i].qtty == 1){
      this.items.splice(i, 1);
    } else{
      this.items[i].qtty--;
    }
  }
  deleteQtty(i:number){
    this.items[i].qtty = 1;
    this.items.splice(i, 1);
  }
  total(){
    let total: number = 0;
    for(let val of this.items){
      if(typeof val.price !== "undefined"){
        total = total + (val.price * val.qtty);
      }
    }
        return total;
    

}
}
