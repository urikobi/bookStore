import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewState } from './../shared/global-config/encapsulation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: viewState
})
export class FooterComponent implements OnInit {

  constructor() { }
  currentYear = new Date().getFullYear(); // To be interpolated.
  ngOnInit() {
  }

}
