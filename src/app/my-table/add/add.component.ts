import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

import {tab} from "../Tab";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService : DataService){};


  id: number;

  name: string = "";

  price: number = 0;

  category: string;


  addProd () {

    let obj = new tab(this.dataService.getNextId(), this.name, this.price, this.category);

    console.log(obj);

    this.dataService.addData(obj);

    this.name = "";

    this.price = 0;

    this.category = "";

  }

  ngOnInit() {
  }

}
