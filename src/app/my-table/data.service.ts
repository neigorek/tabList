import {tab} from './Tab';

import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  private data: tab[] = [
    { id: 1, name : 'product 1', price : 100, category : 'category_1' },
    { id: 2, name : 'product 2', price : 200, category : 'category_1'},
    { id: 3, name : 'product 3', price : 300, category : 'category_2' },
    { id: 4, name : 'product 4', price : 400, category : 'category_2' },
    { id: 5, name : 'product 5', price : 500, category : 'category_2' },
    { id: 6, name : 'product 6', price : 600, category : 'category_2' },
    { id: 7, name : 'product 7', price : 700, category : 'category_3' },
    { id: 8, name : 'product 8', price : 800, category : 'category_3' },
    { id: 9, name : 'product 9', price : 900, category : 'category_3' },
    { id: 10, name : 'product 10', price : 1000, category : 'category_3' }];

  getData () : tab[] {

    return this.data;

  }
  addData (n) {

    this.data.push(new tab(n.id, n.name, n.price, n.category));
  }

  delData (id) {

    for (let P of this.data) {

      if (P.id == id){

        this.data.splice(this.data.indexOf(P), 1);

        console.log(id);
      }
    }

  };

  getNextId () : number {

    return this.data.length + 1;
  }




}
