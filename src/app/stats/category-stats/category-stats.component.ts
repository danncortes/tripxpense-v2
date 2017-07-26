import { Component, OnInit, Input} from '@angular/core';
import { chartsConfig } from '../../../assets/charts.config';
import { StatsService } from '../../services/stats/stats.service';

@Component({
  selector: 'app-category-stats',
  templateUrl: './category-stats.component.html',
  styleUrls: ['./category-stats.component.scss']
})
export class CategoryStatsComponent implements OnInit {

  @Input() statsParam: any;
  processing: boolean;
  stats:object;
  hasOperations: boolean;

  constructor(
    private statsService: StatsService
  ) { }

  ngOnInit() {
    this.getStats(this.statsParam);
  }

  getStats(statsParam){
    this.processing = true;
    this.statsService.getCategoryTravel(statsParam).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
