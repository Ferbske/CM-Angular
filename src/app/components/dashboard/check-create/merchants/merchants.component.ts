import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {Country} from './Country';
import {MerchantCategory} from './MerchantCategory';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MerchantCheck} from '../../check-read/MerchantCheck';
import {CheckNameGenerator} from '../../check-read/CheckNameGenerator';


@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css'],
  providers: [CheckNameGenerator]
})
export class MerchantsComponent implements OnInit {
  @Input() check: MerchantCheck;
  @ViewChild('f') createCheckForm: NgForm;
  countries: Country[];
  merchantCategories: MerchantCategory[];
  countryValue = 'all';
  categoryValue = 'all';

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router, private checkNameGenerator: CheckNameGenerator) {
  }

  ngOnInit() {
    if (!(this.check === undefined)) {
      this.countryValue = this.check.countries[0];
      this.categoryValue = this.check.category;
    }

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
    this.checkService.createMerchantCheck(this.createCheckForm.value.country, this.createCheckForm.value.category, this.checkNameGenerator.generateMerchantCheckName(this.createCheckForm.value.country, this.createCheckForm.value.category));
    this.router.navigate(['/dashboard']);
  }
}
