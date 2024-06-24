import { ModelMeta } from '../shared-services/models/model-metadata';

export interface Sell {
  sellId?: string;
  customerId: string;
  customerName: string;
  customerPhoneNumber: string;
  netAmount: number;
  sellDate: Date;
}

export function getSellMeta() {
  return [
    { key: 'sellId', label: 'SellId', hide: true },
    { key: 'customerId', label: 'Customer Id' },
    { key: 'customerName', label: 'Customer Name' },
    { key: 'customerPhoneNumber', label: 'Customer Phone Number' },
    { key: 'netAmount', label: 'Net Amount' },
    { key: 'sellDate', label: 'Sell Date' },
  ] as Array<ModelMeta>;
}
