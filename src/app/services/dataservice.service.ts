import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable()
export class DataserviceService {
  public accounts: { name: string, status: string }[] = [
    { name: 'Master Account', status: 'active' },
    { name: 'Testaccount', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];
  statusUpdated = new EventEmitter<string>();
  constructor(private loggin: LoggingService) { }
  onAccountAdded(newAccount: { name: string, status: string }) {
    this.loggin.writeLog('a scris ba');
    this.accounts.push(newAccount);
  }
  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
