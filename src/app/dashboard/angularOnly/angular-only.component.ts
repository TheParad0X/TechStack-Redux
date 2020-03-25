import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-angular-only',
  templateUrl: './angular-only.component.html',
  styleUrls: ['./angular-only.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularOnlyComponent {

  public counter = 0;

  constructor(public store: Store<any>) {
  }

  public onNumberChanged(counter: number) {
    this.counter = counter;
  }

}
