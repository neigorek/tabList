import { Component, OnInit } from '@angular/core';

import {DataService} from './data.service';

import {tab} from './Tab';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  providers: [DataService]
})


export class MyTableComponent implements OnInit {


  Tablist: tab[] = this.dataService.getData();

  constructor(private dataService: DataService) {}


  dataSort(e) {

    switch (e) {

      case 0 : {this.Tablist = this.dataService.getData();
        break;
      }

      case 1 : {

        this.Tablist = this.dataService.getData().filter(function (Products) {

          console.log('1');

         return Products.category == 'category_1';

        });
        break;
      }
      case 2 : {

        this.Tablist =  this.dataService.getData().filter(function (Products) {

          return Products.category == 'category_2';

        });
        break;
      }
      case 3 : {

        this.Tablist = this.dataService.getData().filter(function (Products) {

          return Products.category == 'category_3';

        });
        break;
      }

    }
  }

  maxPrice (e): boolean {

    if (e >= 500) {

      return true;
    }

  }


  ngOnInit(): void {

    this.Tablist = this.dataService.getData();
  }

}
