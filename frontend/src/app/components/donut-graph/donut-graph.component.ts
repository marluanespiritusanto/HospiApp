import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: []
})
export class DonutGraphComponent implements OnInit {
  @Input()
  doughnutChartLabels: string[] = [];
  @Input()
  doughnutChartData: number[] = [];
  @Input()
  doughnutChartType: string = '';

  constructor() {}

  ngOnInit() {}
}
