import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartStore } from 'src/app/core/stores/cart/cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  cart$: Observable<CartStore>;

  constructor(
    private store: Store<{ cart: CartStore }>
  ) {
    this.cart$ = this.store.select('cart');
  }

  toggleCart() {
    this.isOpenChange.emit(!this.isOpen)
  }
}
