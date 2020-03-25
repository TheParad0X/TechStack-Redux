import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  @Input()
  counter: number;

  @Output()
  public numberChanged = new EventEmitter<number>();

  constructor() {
  }

  public onIncrement() {
    this.counter = this.counter + 1;
    this.numberChanged.emit(this.counter);
  }

  public onDecrement() {
    this.counter = this.counter - 1;
    this.numberChanged.emit(this.counter);
  }

}
