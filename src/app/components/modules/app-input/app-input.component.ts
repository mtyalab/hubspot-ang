import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent implements OnInit {
   @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
