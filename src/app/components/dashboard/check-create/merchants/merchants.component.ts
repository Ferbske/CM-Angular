import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {Country} from './Country';


@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {
  countries: Country[];

  constructor(private infoService: InfoService) {
    this.getCountries();
  }

  ngOnInit() {
  }

  getCountries() {
    this.infoService.getCountries()
      .subscribe((response) => {
          this.countries = response.countries;
          console.log(this.countries);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
