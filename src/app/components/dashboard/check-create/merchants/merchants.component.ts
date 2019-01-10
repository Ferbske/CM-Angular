import {Component, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {Country} from './Country';
import {MerchantCategory} from './MerchantCategory';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Data, Router} from '@angular/router';


@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {
  @ViewChild('f') createCheckForm: NgForm;
  countries: Country[];
  merchantCategories: MerchantCategory[];

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router) {
    // this.getCountries();
    // this.getMerchantCategories();
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.countries = data['countries'].items;
        }
      );

    this.route.data
      .subscribe(
        (data: Data) => {
          this.merchantCategories = data['categories'].items;
        }
      );
  }

  onCreate() {
    console.log(this.createCheckForm.value.country);
  }
}
