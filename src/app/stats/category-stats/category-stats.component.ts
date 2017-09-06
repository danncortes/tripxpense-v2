import { Component, OnInit, Input} from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';
import { chartsColorConfig } from '../../../assets/charts.config';
import { chartCategoryConfig } from '../../../assets/charts.config';

@Component({
  selector: 'app-category-stats',
  templateUrl: './category-stats.component.html',
  styleUrls: ['./category-stats.component.scss']
})
export class CategoryStatsComponent implements OnInit {

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

  getStats(statsParam){
    this.processing = true;
    this.statsService.getCategoryTravel(statsParam).subscribe(
      data => {
        console.log(data);
        const stats = {
          category : chartCategoryConfig
        };
        this.stats = stats;
        this.processing = false;
        console.log(stats)
      }
    );
  }

}
