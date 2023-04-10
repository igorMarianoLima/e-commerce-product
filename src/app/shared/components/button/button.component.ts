import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Output() click = new EventEmitter();

  handleClick(event: any) {
    this.click.emit(event);
  }
}
