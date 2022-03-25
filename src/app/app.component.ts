import { SnackbarService } from './core/services/snackbar.service';
import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

/**
 * @title Authors Management
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, private _snackbarService:SnackbarService) {}

  openSnackBar() {
    // this._snackBar.open('Cannonball!!', 'Splash', {
    //   horizontalPosition: this.horizontalPosition,
    //   verticalPosition: this.verticalPosition,
    // });
    this._snackbarService.success('dfsdfs')


  }
}