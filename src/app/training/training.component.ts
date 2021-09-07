import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  courseMenu: string = 'Все';
  statusMenu: string = 'Все';
  mediaMenu: string = 'По прогрессу обучения';
  modal: boolean = true;

  @Output() modalState = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalState.emit(this.modal);
  }
}
