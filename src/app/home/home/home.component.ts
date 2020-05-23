import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasAlert = false;
  hasGlobalLoader = false;

  constructor(private loader: LoadingService) { }

  ngOnInit(): void {
  }

  launch() {
    this.hasAlert = !this.hasAlert;
  }

  load() {
    if (this.hasGlobalLoader) {
      this.hasGlobalLoader = false;
      this.loader.stop();
    } else {
      this.hasGlobalLoader = true;
      this.loader.start();
    }
  }

}
