import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit, Input} from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';
import { chartsColorConfig } from '../../../assets/charts.config';
import { chartCategoryConfig } from '../../../assets/charts.config';

@Component({
  selector: 'app-category-stats',
  templateUrl: './category-stats.component.html',
  styleUrls: ['./category-stats.component.scss'],
  providers: [
    CategoryService
  ]
})
export class CategoryStatsComponent implements OnInit {

  @Input() statsParam: any;
  processing: boolean;
  stats: Object;

  constructor(
    private statsService: StatsService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getStats(this.statsParam);
  }

  getStats(statsParam) {
    this.processing = true;
    this.statsService.getCategoryTravel(statsParam).subscribe(
      data => {
        const stats = {
          category : chartCategoryConfig
        };

        stats.category.labels = [];
        stats.category.data = [[], []];
        this.categoryService.get().subscribe(
          categories => {
            for (const category of categories){
              const foundCat = data.find(
                (item) => {
                  return  item.category_name === category.name;
                }
              )
              if (!foundCat) {
                stats.category.labels.push(category.name);
                stats.category.data[0].push([0]);
                stats.category.data[1].push([0]);
              } else {
                stats.category.labels.push(foundCat.category_name);
                stats.category.data[0].push(Number(foundCat.spent));
                stats.category.data[1].push(foundCat.operations);
              }
            }
            this.stats = stats;
            this.processing = false;
          }
        )
      }
    );
  }

}
