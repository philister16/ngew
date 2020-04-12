import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base-component/base-component.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AlertComponent } from './components/alert/alert.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogInputComponent } from './components/dialog-input/dialog-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardLoadingBarComponent } from './components/card-loading-bar/card-loading-bar.component';

const declarations = [
  BaseComponent,
  LoadingIndicatorComponent,
  AlertComponent,
  DialogInputComponent,
  CardLoadingBarComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: declarations
})
export class SharedModule { }
