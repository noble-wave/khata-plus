import { Injectable } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { StorageService, tableNames } from '../../services/storage.service';
import { Customer } from '../../model/customer.mode';
import cryptoRandomString from 'crypto-random-string';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private storage: StorageService) {}

  get(customerId: string) {
    return this.storage.getByKey<Customer>(tableNames.customer, customerId);
  }

  getAll() {
    return this.storage.getAll<Customer>(tableNames.customer);
  }

  add(customer: Customer) {
    customer.createdAt = new Date();
    customer.updatedAt = customer.createdAt;
    customer.customerId = `cs_${cryptoRandomString({ length: 10 })}`;
    return this.storage.addRecord(tableNames.customer, customer);
  }

  update(customer: Customer) {
    customer.updatedAt = new Date();
    return this.storage.updateRecord(tableNames.customer, customer);
  }

  uploadCustomerData(customerData: any[]) {
    return this.storage.bulkPut(tableNames.customer, customerData);
  }

  getCustomerByDate(startDate: Date, endDate: Date) {
    const nextDay = new Date(endDate);
    nextDay.setDate(nextDay.getDate() + 1);

    return this.storage.getAll<Customer>(tableNames.customer).pipe(
      map((customers) =>
        customers.filter((customer) => {
          const customerDate = new Date(customer.updatedAt);
          return customerDate >= startDate && customerDate < nextDay;
        })
      )
    );
  }

  deleteAllCustomer() {
    return this.storage.clear(tableNames.customer);
  }
}
