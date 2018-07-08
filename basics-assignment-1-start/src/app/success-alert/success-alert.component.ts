import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  //templateUrl: './success-alert.component.html',
  template: `
  		<h1>
  			Success!
		</h1>  `,
  //styleUrls: ['./success-alert.component.css']
  styles: ['h1 { color: #006400; } ']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
