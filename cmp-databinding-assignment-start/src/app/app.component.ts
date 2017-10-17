import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evens = [];
  odds = [];

  onTick(tick: {num: number}) {
    if (tick.num % 2 === 0) {
      this.evens.push(tick.num);
    } else {
      this.odds.push(tick.num);
    }
  }

}
