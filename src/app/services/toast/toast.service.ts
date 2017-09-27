import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ToastComponent} from '../../toast/toast.component';

interface options {
  message: string;
  time?: number;
  success?: boolean;
}

@Injectable()
export class ToastService {

  constructor(public snackBar: MdSnackBar) {
  }

  success(data: options) {
    const time = data.time ? data.time : 4000;
    data.success = true;
    const successSnackBar = this.snackBar.openFromComponent(ToastComponent, {
      duration: time,
      extraClasses: ['success-toast'],
      data: data
    });
  }

  error(data: options) {
    const time = data.time ? data.time : 4000;
    data.success = false;

    const errorSnackBar = this.snackBar.openFromComponent(ToastComponent, {
      duration: time,
      extraClasses: ['error-toast']
    });
    errorSnackBar.instance.data = data;
  }

}
