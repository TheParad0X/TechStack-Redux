import { Component } from '@angular/core';
import { DataService } from 'app/dashboard/angular-with-service/data.service';

@Component({
  selector: 'app-counter-with-service',
  templateUrl: './counter-with-service.component.html',
  styleUrls: ['./counter-with-service.component.css'],
})
export class CounterWithServiceComponent {

  constructor(public dataService: DataService) {
  }

  public onIncrement() {
    this.dataService.counter = this.dataService.counter + 1;
  }

  public onDecrement() {
    this.dataService.counter = this.dataService.counter - 1;
  }
}
