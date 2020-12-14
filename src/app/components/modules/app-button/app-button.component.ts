import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {
  @Input() buttonLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
