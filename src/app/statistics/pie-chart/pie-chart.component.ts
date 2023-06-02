import {Component, Input} from '@angular/core';
import {IStat} from "../../appointment-statistics.service";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() stats: Array<IStat> = []
  getChart() {
    let chart = "repeating-conic-gradient(from 0deg,";
    let prev = 0;
    for(let i=0; i<this.stats.length; i++) {
      chart += `${this.stats[i].color} calc(3.6deg * ${prev}) calc(3.6deg * ${prev + this.stats[i].percentage})`;
      if(i !== this.stats.length -1) {
        chart += ",";
      }
      prev = prev + this.stats[i].percentage;
    }
    chart += ")";
    return chart;
  }
  chart = `repeating-conic-gradient(from 0deg, green 0deg calc(3.6deg * ${30.2}), blue calc(3.6deg * ${30.9}) calc(3.6deg * ${30.9 + 20}), yellow calc(3.6deg * ${30.9 + 20}) 360deg)`
}
/* 30%, 20%, rest to 100% (50% */
