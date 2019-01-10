import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CheckService} from '../../../services/check.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() check: Check;

  constructor(private modalService: NgbModal, private checkService: CheckService, private location: Location) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: false}).result.then((result) => {
      console.log(this.check.type);
      if (this.check.type === 'payment') {
          this.checkService.deletePaymentCheck(this.check._id)
            .subscribe(
              (response) => {
                console.log(response);
                location.reload();
              },
              (error) => console.log(error)
            );
        }

      if (this.check.type === 'merchant') {
          this.checkService.deleteMerchantCheck(this.check._id)
            .subscribe(
              (response) => {
                console.log(response);
                location.reload();
              },
              (error) => console.log(error)
            );
        }
    });
  }

  ngOnInit() {
  }

}
