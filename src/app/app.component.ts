import { Component, Injectable } from '@angular/core';
import { DataRepoService } from './data-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  dataRepoService: DataRepoService;
  constructor(dataRepoService: DataRepoService) {
    this.dataRepoService = dataRepoService;
  }
}
