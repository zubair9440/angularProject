import { Component } from '@angular/core';
import { RemainderContainerComponent } from '../remainder-container/remainder-container.component';
@Component({
  selector: 'app-side-container',
  standalone: true,
  imports: [RemainderContainerComponent],
  templateUrl: './side-container.component.html',
  styleUrl: './side-container.component.scss'
})
export class SideContainerComponent {

}
