import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ToastComponent} from '../../toast/toast.component';

interface options{
  message: string;
  time?: number
}

@Injectable()
export class ToastService {

  constructor(public snackBar: MdSnackBar) {
  }

  success(data: options){
    var time = data.time ? data.time : 4000;

    this.snackBar.open(data.message, '', {
      duration: time,
      extraClasses: ['success-toast']
    });
  }

  error(data: options){
    var time = data.time ? data.time : 4000;
    var text = 'text from service'

    this.snackBar.openFromComponent(ToastComponent, {
      duration: time,
      extraClasses: ['error-toast']
    });
  }

}
