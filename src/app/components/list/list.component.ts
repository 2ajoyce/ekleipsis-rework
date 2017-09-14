import { Component, Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() list: FirebaseListObservable<any[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
