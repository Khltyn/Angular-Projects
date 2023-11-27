import { Component, OnInit } from '@angular/core';
import { product } from './productmodal';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  data: any | product[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.displayproduct();
  }

  displayproduct() {
    this.api.getproduct().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  addtocart(item: product) {
    this.api.addtocart(item);
  }

  removeitem(item: product) {
    this.api.removecartitem(item);
  }
}
