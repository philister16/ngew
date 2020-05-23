import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base-component/base-component.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AlertComponent } from './components/alert/alert.component';
import { MatIconModule } from '@angular/material/icon';
import { CardLoadingBarComponent } from './components/card-loading-bar/card-loading-bar.component';

const declarations = [
  BaseComponent,
  LoadingIndicatorComponent,
  AlertComponent,
  CardLoadingBarComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: declarations
})
export class SharedModule { }
