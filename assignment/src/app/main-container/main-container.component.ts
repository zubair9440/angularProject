import { Component } from '@angular/core';
import { CustomTableComponent } from '../custom-table/custom-table.component';
@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
