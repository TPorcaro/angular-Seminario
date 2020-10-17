import { Component, OnInit } from '@angular/core';
import { ProductListService, Artesania } from '../../services/product-list.services';
// import { Router } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  artesanias: Artesania[] = [];

  constructor(
    private artesaniaService: ProductListService,
    // private router = Router
  ) { }
  ngOnInit(): void {
  this.artesanias = this.artesaniaService.getArtesanias();
  }
  addQuantity(artesania: Artesania): void{
    if (artesania.stock > artesania.quantity){
      artesania.quantity++;
    }
    else{
      this.alertNoStock();
    }
  }
  decreaseQuantity(artesania: Artesania): void{
    if (artesania.quantity > 0){
      artesania.quantity--;
    }
  }
  changeQuantity(event, artesania: Artesania){
    if (event.target.value > artesania.stock){
      this.alertNoStock();
      artesania.quantity = artesania.stock;
    }
  }

  alertNoStock(){
    alert('No tenemos tanto stock');
  }
}
