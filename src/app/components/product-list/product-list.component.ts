import { Component, OnInit } from '@angular/core';
import { ProductListService, Artesania } from '../../services/product-list.services';
import { ProductCartService } from '../../services/product-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  artesanias: Artesania[] = [];

  constructor(
    private artesaniaService: ProductListService,
    private cart: ProductCartService
  ) { }
  ngOnInit(): void {
  this.artesanias = this.artesaniaService.getArtesanias();
  }
  maxReached(text: string){
    alert(text);
  }
  addToCart(artesania: Artesania){
    this.cart.addToCart(artesania);
    artesania.stock -= artesania.quantity;
    artesania.quantity = 0;
  }
}
