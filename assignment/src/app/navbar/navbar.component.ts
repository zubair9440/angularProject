import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('ref') ref: any
  active(event: any){
    console.log("hello active button")
    this.ref.getElementsByClassName("active")[0].className=""
    this.ref.getElementsByClassName("active")[0].className=""
    event.target.className="active";

  }
}
