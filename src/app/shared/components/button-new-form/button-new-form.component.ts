import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-new-form',
  templateUrl: './button-new-form.component.html',
  styleUrls: ['./button-new-form.component.scss']
})
export class ButtonNewFormComponent {
  @Input() label: any = '';
  constructor() { }

}
