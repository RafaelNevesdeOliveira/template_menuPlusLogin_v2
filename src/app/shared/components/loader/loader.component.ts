import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  spinnerActive: boolean = true;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.hideSpinner();
  }

  hideSpinner(): void {
    this.loaderService.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };
}
