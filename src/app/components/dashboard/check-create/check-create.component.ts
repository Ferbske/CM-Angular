import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-check-create',
  templateUrl: './check-create.component.html',
  styleUrls: ['./check-create.component.css']
})
export class CheckCreateComponent implements OnInit {
  status: String = 'create';
  value = 'payment';

  constructor(private route: ActivatedRoute) {
    let param = this.route.snapshot.params['id'];

    if (!(param === undefined)) {
      this.status = 'update';
    }

    console.log(this.status);
  }

  ngOnInit() {
  }

}
