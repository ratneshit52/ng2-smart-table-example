import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServerDataSource  } from 'ng2-smart-table';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  url: string = "https://jsonplaceholder.typicode.com/users/"

  source: ServerDataSource;

  constructor(public http: Http) {
    this.source = new ServerDataSource(http, { endPoint: this.url });
   }

  ngOnInit() {
  }

  settings = {
    add:{
      confirmCreate:true
     },
     edit:{
      confirmSave:true
     },
     delete :{
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  addRecord(event) {
    console.log(event)
    var data = {"name" : event.newData.employee_name,
                "salary" : event.newData.employee_salary,
                "age" : event.newData.employee_age
                };
	this.http.post(this.url, data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      // (err: HttpErrorResponse) => { 
        (err) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  updateRecord(event) {
    console.log('ddddd' + event);
    var data = {"name" : event.newData.name,
                "username" : event.newData.username,
                "email" : event.newData.email,
                "id" : event.newData.id
                };
  this.http.put(this.url + event.newData.id, data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      // (err: HttpErrorResponse) => {
      (err) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  deleteRecord(event){
    console.log(event);
   this.http.delete(this.url + event.data.id).subscribe(
       res => {
         console.log(res);
         event.confirm.resolve(event.source.data);
     },
    //  (err: HttpErrorResponse) => {
     (err) => {
       if (err.error instanceof Error) {
         console.log("Client-side error occured.");
       } else {
         console.log("Server-side error occured.");
       }
     });
   //event.confirm.resolve(event.source.data);

 }

}
