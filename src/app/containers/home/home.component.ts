import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sidebars = [
    {id: 1, name:'Home'},
    // {id: 2, name:'Analytics'},
    // {id: 3, name:'Inbox'},
    // {id: 4, name:'Invoices'},
    // {id: 5, name:'Customers'},
    // {id: 6, name:'Chat Room'},
    // {id: 7, name:'Calendar'},
    // {id: 8, name:'Help Center'},
    // {id: 9, name:'Settings'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
