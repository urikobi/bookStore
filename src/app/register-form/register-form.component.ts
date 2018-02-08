import { Component, OnInit, Output } from '@angular/core';
import { RegisterUser } from './../shared/models/registerUser.model';

import { CountryBasic } from './../shared/models/countryBasic.model';
import { CountryService } from './../shared/services/country.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  newUser = new RegisterUser();
  countryList: CountryBasic[];
  countryNamesList: string[];
  selectCountryMode: boolean;
  selectedCountry: CountryBasic;
  constructor(private countryService: CountryService) { }


  setCountryMode() {
    this.selectCountryMode = !this.selectCountryMode;
  }

  setUserCountry(x: CountryBasic): void {
    this.setCountryMode();
    this.selectedCountry = x;
    this.newUser.country = x.name;
  }


  ngOnInit() {

    this.selectCountryMode = false;


    let func = (res: string[]) => { this.countryNamesList = res };
    this.countryService.getCountriesNames(func);

    this.countryService.getCountryiesInfo()
      .subscribe((res: CountryBasic[]) => {
        this.countryList = res;
        this.selectedCountry = res.length?res[0]:undefined;
      })
  }
}

