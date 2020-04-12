import { Component, Input } from '@angular/core';
import { fadeInOut } from 'src/styles/animations';

@Component({
  selector: 'app-card-loading-bar',
  templateUrl: './card-loading-bar.component.html',
  styleUrls: ['./card-loading-bar.component.scss'],
  animations: [fadeInOut]
})
export class CardLoadingBarComponent {
  @Input() show = false;
}
