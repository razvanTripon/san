import { LoggingService } from './services/logging.service';
import { DataserviceService } from './services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataserviceService, LoggingService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  constructor(private dataserviceService: DataserviceService) {
  }
  ngOnInit() {
    this.accounts = this.dataserviceService.accounts;
  }

}
