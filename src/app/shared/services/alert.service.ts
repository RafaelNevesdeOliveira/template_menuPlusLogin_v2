import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  success(title: string, textMessage: string, textButton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'success',
      confirmButtonText: textButton,
    });
  }

  error(title: string, textMessage: string, textButton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'error',
      confirmButtonText: textButton,
    });
  }
  warning(title: string, textMessage: string, textButton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'warning',
      confirmButtonText: textButton,
    });
  }

  info(title: string, textMessage: string, textButton: string) {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'info',
      confirmButtonText: textButton,
    });
  }

  question2(
    title: string,
    textMessage: string,
    textButton: string
  ): Promise<any> {
    return Swal.fire({
      title: title,
      text: textMessage,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: textButton,
    });
  }
}
