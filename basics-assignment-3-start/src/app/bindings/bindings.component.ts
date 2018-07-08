import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styles: [`
  .textColor {
  	color: white;
  }
  .btn-primary {
  	margin: 20px 0;
  }
  `]
})
export class BindingsComponent implements OnInit {
	btnText = 'Display Details';
	numberOfClicks = [];
	clicks = -1;
	showP = false;

  constructor() { }

  ngOnInit() {
  }

  showHideP() {
  	this.clicks++;
  	this.numberOfClicks.push(this.clicks);

  	if(this.clicks %2 === 0 || this.clicks === 0){
  		this.showP = true;
  		this.btnText = 'Hide Details';
  	}
  	else {
  		this.btnText = 'Display Details';
  		this.showP = false;
  	}

	}
	getbgColor() {
		if(this.clicks > 4) {
			return 'blue';
		}
	}

}
