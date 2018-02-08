import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookBasic } from './../models/bookBasic.model';

@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBooksInfo():Observable<BookBasic[]>{
    return this.httpClient.get<BookBasic[]>("'./../../../assets/apis/books.json'")
  }
}
