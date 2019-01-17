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
  checkNameValue = '';

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router, private checkNameGenerator: CheckNameGenerator) {
  }

  ngOnInit() {
    if (this.check !== undefined) {
      this.countryValue = this.check.countries[0];
      this.categoryValue = this.check.category;
      this.checkNameValue = this.check.checkName;
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
    if (this.check === undefined) {
      this.checkService.createMerchantCheck(this.createCheckForm.value.country, this.createCheckForm.value.category, this.createCheckForm.value.name);
    } else if (this.check !== undefined) {
      this.checkService.updateMerchantCheck(this.createCheckForm.value.country, this.createCheckForm.value.category, this.createCheckForm.value.name, this.check._id);
    };


    this.router.navigateByUrl('/check', {skipLocationChange: true}).then(() => this.router.navigate(['/dashboard']));
  }

  updateName(country: string, category: string) {
    if (country !== null) {
      this.countryValue = country;
    } else if (category !== null) {
      this.categoryValue = category;
    }

    this.checkNameValue = this.checkNameGenerator.generateMerchantCheckName(this.countryValue, this.categoryValue);
  }
}
