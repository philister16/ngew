import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() type: 'success' | 'warning' | 'info';
  @Input() actionTitle: string;
  @Output() action = new EventEmitter<boolean>();

  onAction() {
    this.action.emit(true);
  }

}
