import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //#region Constructor

  public constructor(private httpClient: HttpClient, private toastr: ToastrService) {

  }

  //#endregion

  //#region Methods

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

  //#endregion

  ngOnInit() {
  }

}
