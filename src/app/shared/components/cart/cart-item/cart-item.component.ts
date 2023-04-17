import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CartStore } from 'src/app/core/stores/cart/cart.store';
import { Product } from 'src/app/core/models/product';
import { Store } from '@ngrx/store';
import { CartActions } from 'src/app/core/stores/cart/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: Product;
  cart$: Observable<CartStore>;

  constructor(
    private store: Store<{ cart: CartStore }>
  ) {
    this.product = {} as Product;
    this.cart$ = this.store.select('cart');
  }

  onRemoveFromCart(product: Product) {
    this.store.dispatch(
      CartActions.remove_product({ product })
    );
  }
}
