import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ToastComponent} from '../../toast/toast.component';

interface options{
  message: string;
  time?: number;
  success?: boolean;
}

@Injectable()
export class ToastService {

  constructor(public snackBar: MdSnackBar) {
  }

  success(data: options){
    let time = data.time ? data.time : 4000;
    data.success = true;

    let successSnackBar = this.snackBar.openFromComponent(ToastComponent, {
      duration: time,
      extraClasses: ['success-toast']
    });
    successSnackBar.instance.data = data;
  }

  error(data: options){
    let time = data.time ? data.time : 4000;
    data.success = false;

    let errorSnackBar = this.snackBar.openFromComponent(ToastComponent, {
      duration: time,
      extraClasses: ['error-toast']
    });
    errorSnackBar.instance.data = data;
  }

}
