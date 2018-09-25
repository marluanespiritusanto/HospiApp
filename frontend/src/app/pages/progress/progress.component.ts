import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percent: number = 50;
  constructor() {}

  increment() {
    this.percent += 10;
  }

  decrement() {
    this.percent -= 10;
  }

  ngOnInit() {}
}
