import { DataserviceService } from './../services/dataservice.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private logging: LoggingService, private dataserviceService: DataserviceService) {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.dataserviceService.onAccountAdded({ name: accountName, status: accountStatus })
    this.logging.writeLog('bla bla bla ' + accountStatus);
  }
}
