import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  launch() {
    this.hasAlert = !this.hasAlert;
  }

}
