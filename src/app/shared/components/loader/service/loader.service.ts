import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public numberOfRequests: number = 0;
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  handleRequest = (state: string = 'minus'): void => {
    this.numberOfRequests = (state === 'plus') ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  };
}
