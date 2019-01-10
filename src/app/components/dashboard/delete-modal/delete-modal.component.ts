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
  @Input() checkId: string;

  constructor(private modalService: NgbModal, private checkService: CheckService, private location: Location) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: false}).result.then((result) => {
      this.checkService.deletePaymentCheck(this.checkId)
        .subscribe(
          (response) => {
            console.log(response);
            location.reload();
          },
          (error) => console.log(error)
        );
    }, (reason) => {
      console.log(reason);
    });
  }

  ngOnInit() {
  }

}
