import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {

  @Input()
  counter: number;

  @Output()
  public numberChanged = new EventEmitter<number>();

  constructor() {
  }

  public onNumberChanged(counter: number) {
    this.counter = counter;
    this.numberChanged.emit(this.counter);
  }

}
