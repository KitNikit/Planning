import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalState: boolean = false;

  open(modal: boolean) {
    this.modalState = modal;
  }

  close(modal: boolean) {
    this.modalState = modal;
  }
}
