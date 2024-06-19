import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
