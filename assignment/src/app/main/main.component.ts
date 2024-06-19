import { Component } from '@angular/core';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { MainContainerComponent } from '../main-container/main-container.component';
import { SideContainerComponent } from '../side-container/side-container.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CustomTableComponent,MainContainerComponent,SideContainerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
