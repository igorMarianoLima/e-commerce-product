import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amount-input',
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss']
})
export class AmountInputComponent {
  @Input() amount: number = 0;
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  
  @Output() onChange = new EventEmitter<number>();

  handleClick(action: 'sum' | 'sub') {
    if (action === 'sum') {
      if (this.max !== null && this.amount >= this.max) {
          return;
      }

      this.amount++;
      this.emit()
    } else {
      if (this.min !== null && this.amount <= this.min) {
          return;
      }

      this.amount--;
      this.emit()
    }
  }

  emit() {
    this.onChange.emit(this.amount);
  }
}
