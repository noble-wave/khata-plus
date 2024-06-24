import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IrsControl } from '../../shared-services/models/model-metadata';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class IrsInputComponent implements OnInit, OnChanges {
  @Input() form!: AbstractControl; // FormGroup;
  @Input() name!: string;
  @Input() label?: string;
  @Input() type!: string;
  @Input() icon?: string;
  @Input() hint!: string;
  @Input() hintEnd?: string;
  @Input() suffix?: string;
  @Input() suffixClass?: string;

  control!: IrsControl;
  hideRequiredMarker = false;

  @Output() onValueChange = new EventEmitter<any>(true);

  constructor() {}

  ngOnInit() {
    // Default type is text
    if (!this.type) {
      this.type = 'text';
    }

    this.control = this.form?.get(this.name) as IrsControl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
      this.control = this.form.get(this.name) as IrsControl;

      if (this.control) {
        this.control.valueChanges
          .pipe(startWith(this.control.value))
          .subscribe((value) => {
            this.onValueChange.emit(value);
          });
      }
    }
  }

  valueChanged() {
    this.onValueChange.emit(this.control.value);
  }
}
