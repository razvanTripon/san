import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  constructor(private logging: LoggingService, private dataserviceService: DataserviceService) {
  }

  onSetTo(status: string) {
    this.dataserviceService.onStatusChanged({ id: this.id, newStatus: status });
    //   this.account.status = status;
    this.logging.writeLog('A server status changed, new status: ' + status);
    this.dataserviceService.statusUpdated.emit(status);
  }
}
