import { Component } from '@angular/core';
import { DataService } from 'app/dashboard/angular-with-service/data.service';

@Component({
  selector: 'app-angular-with-service',
  templateUrl: './angular-with-service.component.html',
  styleUrls: ['./angular-with-service.component.css'],
})
export class AngularWithServiceComponent {

  constructor(public dataService: DataService) {
  }

}
