import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CheckService} from '../../../services/check.service';

@Component({
  selector: 'app-check-create',
  templateUrl: './check-create.component.html',
  styleUrls: ['./check-create.component.css']
})
export class CheckCreateComponent implements OnInit {
  status: String = 'create';
  value = 'paymentCheck';
  check = undefined;

  constructor(private route: ActivatedRoute, private checkService: CheckService) {
    let param = this.route.snapshot.params['id'];

    if (!(param === undefined)) {
      this.status = 'update';
      this.checkService.getcheck(param)
        .subscribe(
          (response) => {
            this.value = response.type;
            this.check = response.check;
          },
          (error) => console.log(error)
        );
    }
  }

  ngOnInit() {
  }

}
