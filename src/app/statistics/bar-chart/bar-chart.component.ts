import {Component, Input} from '@angular/core';
import {IStat} from "../../appointment-statistics.service";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() stats: Array<IStat> = [];
}
