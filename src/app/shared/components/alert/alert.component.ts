import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, trigger, transition, style } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(8px)' }),
            animate('0.2s ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' }))
          ]
        ),
        transition(
          ':leave', [
          style({ opacity: 1 }),
          animate('0.2s ease-in',
            style({ opacity: 0, transform: 'translateY(-16px)' }))
        ]
        )
      ]
    )
  ]
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
