import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  tab1: boolean = true;
  tab2: boolean = false;
  modal: boolean = true;

  setTab1() {
    this.tab1 = true;
    this.tab2 = false;
  }
  setTab2() {
    this.tab2 = true;
    this.tab1 = false;
  }
  setModal() {
    this.modal = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
