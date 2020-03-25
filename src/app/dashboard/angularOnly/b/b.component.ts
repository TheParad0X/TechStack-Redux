import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent {

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
