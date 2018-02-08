import { Component, OnInit } from '@angular/core';
import { BookBasic } from './../shared/models/bookBasic.model';
import { ProductPreviewInfo } from './../shared/models/product-preview.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})

export class ProductPreviewComponent implements OnInit {


  previewProductViewInfo: ProductPreviewComponent;
  bookBasic: BookBasic;
  initProduct: Object;


  constructor() { }


  ngOnInit() {
    this.previewProductViewInfo = new ProductPreviewComponent();
    
  }

}
