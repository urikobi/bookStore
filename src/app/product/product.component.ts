import { Component, OnInit } from '@angular/core';
import { BooksService } from './../shared/services/books.service';
import { Book } from './../shared/models/bookBasic.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  bookList:Book[];
  constructor() { }

  ngOnInit() {
  }

}
