import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;
  timeTics;
  @Output() ticked = new EventEmitter<{num: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.timeTics = setInterval(() => this.onTick(), 1000);
  }

  onTick() {
    this.counter += 1;
    this.ticked.emit({num: this.counter});
  }

  onStopGame() {
    clearInterval(this.timeTics);
  }

}
