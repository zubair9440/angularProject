import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {
  myObj=[
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    },
    {
      transactionType: 'termination',
      duedate: '2021-07-01',
      daysdue:1
    }
  ]
}
