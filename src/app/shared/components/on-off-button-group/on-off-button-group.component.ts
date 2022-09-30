import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id.service';

enum OnOffButtonGroupOptions {
  ON = 'on',
  OFF = 'off',
}

@Component({
  selector: 'app-on-off-button-group',
  templateUrl: './on-off-button-group.component.html',
  styleUrls: ['./on-off-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => OnOffButtonGroupComponent),
    },
  ],
})
export class OnOffButtonGroupComponent implements ControlValueAccessor {
  @Input() public value: boolean;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<boolean>();
  public id: string;
  public options = OnOffButtonGroupOptions;
  public onChange = (value: boolean) => {};
  public onTouched = () => {};

  constructor(private _uniqueIdService: UniqueIdService) {
    this.id = this._uniqueIdService.generateUniqueIdWithPrefix(
      'on-off-button-group'
    );
  }

  writeValue(value: boolean): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: boolean)=> void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: ()=> void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: boolean):void{
    this.writeValue(value);
  }
}
