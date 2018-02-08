import { Component, OnInit } from '@angular/core';
import { StoreInfo } from './../shared/models/storeInfo.model';
import { CountryBasic } from './../shared/models/countryBasic.model';
import { Address } from './../shared/models/address.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  myStore: StoreInfo;
  country: CountryBasic;
  initStore: Object;
  initAddress: Object;
  
  constructor() { }

  ngOnInit() {
    this.myStore = new StoreInfo();

    this.initStore = {
      storeName: "book",
      mainImage: "/assets/images/bookCover.png",
      address: new Address()
    }
    Object.assign(this.myStore, this.initStore);

    this.initAddress = {
      flag: "https://restcountries.eu/data/isr.svg",
      name: "Israel",
      cityName: "Tel-Aviv",
      roadName: "Hamasger",
      houseNumber: 12
    }

    Object.assign(this.myStore.address,this.initAddress);

  }

}
