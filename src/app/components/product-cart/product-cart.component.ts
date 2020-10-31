import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../../services/product-cart.service';
import { Artesania } from '../../services/product-list.services';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  cartProducts$: Observable<Artesania[]>;
  total$: Observable<number>;
  constructor(
    private cart: ProductCartService,
    ) {
    this.cartProducts$ = cart.cartProducts.asObservable();
    this.total$ = cart.total.asObservable();
   }

  ngOnInit(): void {
  }
  submitCart(){
    console.log(this.total$);
    this.cart.submitCart();
    alert('Gracias Por su Compra');
  }
}
