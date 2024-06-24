import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModelMeta } from '../../shared-services/models/model-metadata';
import { CustomerService } from '../service/customer.service';
import { AppService } from '../../services/app.service';
import { getCustomerMeta } from '../../model/customer.mode';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  form!: FormGroup;
  modelMeta!: ModelMeta[];

  constructor(private app: AppService, private service: CustomerService) {}

  ngOnInit(): void {
    this.modelMeta = getCustomerMeta();
    this.form = this.app.meta.toFormGroup({ isActive: true }, this.modelMeta);
  }

  save() {
    let data = this.form.value;
    console.log('customer save data ' + data);
    this.service.add(data).subscribe((x) => {
      this.app.noty.notifyClose('');
    });
  }
}
