import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar, private zone: NgZone) {}

  success(message: string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition, duration: 5000
    });
  }
}
