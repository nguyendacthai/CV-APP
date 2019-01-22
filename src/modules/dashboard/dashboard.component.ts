import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //#region Properties

  closeResult: string;

  //#endregion

  //#region Constructor

  public constructor(private httpClient: HttpClient,
    private toastr: ToastrService,
    private modalService: NgbModal) {

  }

  //#endregion

  //#region Methods

  ngOnInit() {
  }

  method1Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
        this.toastr.success('Success message', 'Success');
      }
    );
  }

  method2Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/user12').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  //#endregion

}
