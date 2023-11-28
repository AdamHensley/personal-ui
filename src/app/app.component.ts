import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NgbInputDatepicker, NgbModal, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbInputDatepicker, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  title = 'personal-ui';
}
