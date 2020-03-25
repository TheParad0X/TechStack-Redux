import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent {

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
