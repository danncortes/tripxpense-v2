import { Component, OnInit, Input} from '@angular/core';
import { chartsColorConfig } from '../../../assets/charts.config';
import { chartPayMethodConfig } from '../../../assets/charts.config';
import { StatsService } from '../../services/stats/stats.service';

@Component({
  selector: 'app-paymethod-stats',
  templateUrl: './paymethod-stats.component.html',
  styleUrls: ['./paymethod-stats.component.scss']
})
export class PaymethodStatsComponent implements OnInit {

  @Input() statsParam: any;
  processing: boolean;
  stats: Object;
  hasOperations: boolean;

  constructor(
    private statsService: StatsService
  ) { }

  ngOnInit() {
    this.getStats(this.statsParam);
  }

  getStats(statsParam) {
    this.processing = true;
    this.statsService.getPayMethodTravel(statsParam).subscribe(
      data => {
        const stats = {
          paymethod : chartPayMethodConfig
        };

        stats.paymethod['income'].labels = [];
        stats.paymethod['income'].data = [];
        stats.paymethod['spent'].labels = [];
        stats.paymethod['spent'].data = [];
        stats.paymethod['operations'].labels = [];
        stats.paymethod['operations'].data = [];

        for (let key in data) {
          if (key) {
            stats.paymethod['income'].labels.push(data[key].paymethod_name);
            stats.paymethod['income'].data.push(data[key].income);
            stats.paymethod['spent'].labels.push(data[key].paymethod_name);
            stats.paymethod['spent'].data.push(data[key].spent);
            stats.paymethod['operations'].labels.push(data[key].paymethod_name);
            stats.paymethod['operations'].data.push(data[key].operations);
          }
        }
        this.hasOperations = data.find(function (d) {
          d.operation = Number(d.operation);
          return d.operations > 0;
        }) === undefined ? false : true;
        this.stats = stats;
        this.processing = false;
        }
    );
  }

}
