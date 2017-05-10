import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';

interface options{
  message: string;
  time?: number
}

@Injectable()
export class ToastService {

  constructor(public snackBar: MdSnackBar) { }

  error(data: options){
    var time = data.time ? data.time : 4000;

    this.snackBar.open(data.message, '', {
      duration: time,
      extraClasses: ['error-toast']
    });
  }

  success(data: options){
    var time = data.time ? data.time : 4000;

    this.snackBar.open(data.message, '', {
      duration: time,
      extraClasses: ['success-toast']
    });
  }

}
