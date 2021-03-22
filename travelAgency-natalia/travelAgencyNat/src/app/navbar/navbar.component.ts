import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  brandName: string;
  constructor() {
    this.brandName = "WinterTour";
  }

  ngOnInit(): void {
  }

}
