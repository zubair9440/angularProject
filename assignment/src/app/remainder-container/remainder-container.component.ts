import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-remainder-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './remainder-container.component.html',
  styleUrl: './remainder-container.component.scss'
})
export class RemainderContainerComponent {
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
    },]
}
