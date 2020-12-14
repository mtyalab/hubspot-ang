import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './app-input-label.component.html',
  styleUrls: ['./app-input-label.component.css']
})
export class AppInputLabelComponent implements OnInit {
 @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
