import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  constructor(private logging: LoggingService) {
  }

  onSetTo(status: string) {
    this.account.status = status;
    this.logging.writeLog('A server status changed, new status: ' + status);
  }
}
