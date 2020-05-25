import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    console.log(this.stockDataService.getStaticData())
  }

}
