import { Component, Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TeamFeedback } from '../../models/team-feedback';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() category: string;
  @Input() list: FirebaseListObservable<any[]>;

  constructor() {
  }

  ngOnInit() {
  }

  filterNotes(note: TeamFeedback) {
    // console.log(note.category.toString(), this.category);
    return note.category ? note.category.toString() === this.category : false;
  }

  onSubmit(form: any) {
    console.log(this.category, form.message);
  }

}
