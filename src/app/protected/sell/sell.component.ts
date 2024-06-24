import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModelMeta } from '../../shared-services/models/model-metadata';
import { AppService } from '../../services/app.service';
import { getSellMeta } from '../../model/sell.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
})
export class SellComponent {
  form!: FormGroup;
  modelMeta!: ModelMeta[];

  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.modelMeta = getSellMeta();
    this.form = this.app.meta.toFormGroup(
      { sellDate: new Date() },
      this.modelMeta
    );
  }

  udhar(isActive: boolean) {
    console.log(isActive);
  }
}
