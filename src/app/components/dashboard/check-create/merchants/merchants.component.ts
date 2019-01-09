import {Component, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {Country} from './Country';
import {MerchantCategory} from './MerchantCategory';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';


@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {
  @ViewChild('f') createCheckForm: NgForm;
  countries: Country[];
  merchantCategories: MerchantCategory[];

  constructor(private infoService: InfoService, private checkService: CheckService) {
    this.getCountries();
    this.getMerchantCategories();
  }

  ngOnInit() {
  }

  getCountries() {
    this.infoService.getCountries()
      .subscribe((response) => {
          this.countries = response.countries;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getMerchantCategories() {
    this.infoService.getMerchantCategories()
      .subscribe((response) => {
          this.merchantCategories = response.merchantCategories;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onCreate() {
    console.log(this.createCheckForm.value.country);
  }
}
