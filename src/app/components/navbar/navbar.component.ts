import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artesania } from 'src/app/services/product-list.services';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartProducts$: Observable<Artesania[]>;
  cartLenght = -1;
  constructor(
    private cart: ProductCartService,
  ) {
    this.cartProducts$ = cart.cartProducts.asObservable();
    this.cartProducts$.forEach(product => {
      this.cartLenght++;
    });
    console.log(this.cartLenght);
   }

  ngOnInit(): void {
  }

}
