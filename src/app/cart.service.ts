import { Injectable } from '@angular/core';
import { products } from './products';
import { IProducts } from './iproducts'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProducts[] = [];
  
  constructor() { }

  // priceFun(val:IProducts){
  //       // for(let val of this.products){
  //       if(typeof(val.price) == "undefined"){
  //         return "This product is not available";
  //       } else{
  //         return val.price;
  //       }
  //     // }
  //   }



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
      total = total + (val.price * val.qtty);
    }
    return total;

    // let total: number = 0;
    // let result: string = "";
    // for(let val of this.items){
    //   total = total + (val.price * val.qtty);
    //   if(total<40){
    //     return total;
    //   } else {
    //     result = `${total}Your discount is 15%. Your new total is ${total * 0.85}`;
    //     return result ;
    //   }
    // }
  }
}
