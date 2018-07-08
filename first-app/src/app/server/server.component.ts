import { Component } from '@angular/core';

@Component({
	selector: 'app-server', //selector can also be defined '[.app-server]' or as '.app-server'
	templateUrl: './server.component.html',
	styles: [`
	.online {
		color: white;
	}
	`]
})
export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'Offline';
	serverUser = 'Me';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'; //Math.random returns a random float point number between 0 and 1

	}
	getServerUser() {
		return this.serverUser;
	}
	getColor() {
		if(this.serverStatus === 'Offline') {
			return 'red';
		}
		else {
			return 'green';
		}
	}

}
