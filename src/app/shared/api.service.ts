import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../component/product-view/productmodal';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  product() {
    throw new Error('Method not implemented.');
  }

  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getproduct() {
    return this.http.get<product[]>('https://fakestoreapi.com/products');
  }

  getproductbyid(id: string) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }

  addtocart(data: product) {
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }

  products() {
    return this.productlist.asObservable();
  }

  removecartitem(data: product) {
    this.cartitemlist.map((a: product, index: product) => {
      if (data.id === a.id) {
        this.cartitemlist.splice(index, 1);
      }
    });
    this.productlist.next(this.cartitemlist);
  }

  // * total count funct
  calculateprice() {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.price;
    });
    return total;
  }

  // * remove all items

  removeallitems() {
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist);
  }
}
