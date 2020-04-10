import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInputData } from 'src/app/shared/components/dialog-input/dialog-input-data.interface';
import { DialogInputComponent } from 'src/app/shared/components/dialog-input/dialog-input.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogWidth = '360px';

  constructor(private dialog: MatDialog) { }

  get enterPassword(): Promise<string> {
    const data: DialogInputData = {
      title: 'Enter password',
      content: 'Type your password and click continue.',
      label: 'Password',
      inputType: 'password',
      value: null,
      continue: 'Continue'
    };

    return this.dialog.open(DialogInputComponent, {
      width: this.dialogWidth,
      data
    }).afterClosed().toPromise();
  }
}
