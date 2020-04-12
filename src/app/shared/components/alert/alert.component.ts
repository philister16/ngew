import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, trigger, transition, style } from '@angular/animations';
import { highlightInOut } from 'src/styles/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [highlightInOut]
})
export class AlertComponent {
  @Input() type: 'success' | 'warning' | 'info';
  @Input() actionTitle: string;
  @Input() show = true;
  @Input() dismissible = false;
  @Output() action = new EventEmitter<boolean>();
  @Output() dismissed = new EventEmitter<boolean>();

  onAction() {
    this.action.emit(true);
  }

  dismiss() {
    if (this.dismissible) {
      this.show = false;
      this.dismissed.emit(true);
    }
  }

}
