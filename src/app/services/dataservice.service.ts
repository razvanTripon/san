export class DataserviceService {
  public accounts: { name: string, status: string }[] = [
    { name: 'Master Account', status: 'active' },
    { name: 'Testaccount', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];
  constructor() { }
  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }
  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
