import { Injectable } from '@angular/core';
import { ModelMetaService } from '../shared-services/services/model-metadata.service';
import { AppNotificationService } from '../shared-services/services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    public meta: ModelMetaService,
    public noty: AppNotificationService
  ) {
    // FormHelper.notyInit(noty);
  }
}
