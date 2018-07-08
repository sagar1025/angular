import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  templateUrl: './forms-binding.component.html',
  styleUrls: ['./forms-binding.component.css']
})
export class FormsBindingComponent implements OnInit {
	userName = '';
	
	constructor() { }

	ngOnInit() {

	}

	getuserName(event: any) {
		this.userName =  event.target.value;
	}
	getuserNames() {
		return this.userName;
	}
	btnStatus() {
		if(this.userName !== '' ) {
			return true;
		}
	}
	resetName() {
		this.userName = '';
	}

}
