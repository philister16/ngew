import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  private initConfig: MatSnackBarConfig = {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'end'
  };

  constructor(private snackbar: MatSnackBar) { }

  info(message: string, action = null, config: MatSnackBarConfig = {}) {
    return this.snackbar.open(message, action, { ...this.initConfig, ...config });
  }

  err(
    message: string,
    action = null,
    config: MatSnackBarConfig = {}) {
    return this.snackbar.open(message, action, { ...this.initConfig, panelClass: ['bg-error'], ...config });
  }

}
